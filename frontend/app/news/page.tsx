import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const PER_PAGE = 9; // Number of news posts per page

const NEWS_QUERY = (start: number, end: number) => `*[
  _type == "news" && defined(slug.current)
]|order(publishedAt desc)[${start}...${end}]{
  _id, title, slug, publishedAt, image, description
}`;

const TOTAL_COUNT_QUERY = `count(*[_type == "news" && defined(slug.current)])`;

function formatDate(dateString?: string) {
  if (!dateString) return "N/A";

  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "short" });

  return `${day} ${month} `;
}

export default async function News({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const start = (currentPage - 1) * PER_PAGE;
  const end = start + PER_PAGE;

  // Fetch paginated news
  const news = await client.fetch<SanityDocument[]>(
    NEWS_QUERY(start, end),
    {},
    options
  );

  // Fetch total count
  const total = await client.fetch<number>(TOTAL_COUNT_QUERY);
  const totalPages = Math.ceil(total / PER_PAGE);

  return (
    <section className="my-4 w-[90%] mx-auto">
      <div className="space-y-3">
        <h2 className="font-extralight tracking-[1rem] text-xl text-grayText uppercase">
          News
        </h2>
        <h1 className="font-black text-3xl">Latest trend.</h1>
        <div className="h-2 w-20 bg-secondary mb-8" />
      </div>

      <article className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => {
          const imageUrl = item.image ? urlFor(item.image)?.url() : null;

          return (
            <Link key={item._id} href={`/news/${item.slug.current}`}>
              <div>
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    width={600}
                    height={400}
                    alt={item.title ?? "News image"}
                    className="w-full h-48 object-cover mb-4"
                  />
                )}
                <div className="flex justify-center items-start gap-4">
                  <div>
                    <p className="text-white bg-secondary py-2 px-3 font-bold">
                      {formatDate(item.publishedAt)}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-black text-md mb-2 uppercase line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </article>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 my-10">
        {currentPage > 1 && (
          <Link
            href={`?page=${currentPage - 1}`}
            className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
          >
            Previous
          </Link>
        )}
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <Link
            href={`?page=${currentPage + 1}`}
            className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
          >
            Next
          </Link>
        )}
      </div>
    </section>
  );
}
