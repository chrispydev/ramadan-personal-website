import HorizontalLine from "../components/horizontal-line";
import Initiate from "../components/initiate";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const PER_PAGE = 8; // Number of items per page

const INITIATIVE_QUERY = (start: number, end: number) => `*[
  _type == "initiative"
  && defined(slug.current)
]|order(publishedAt desc)[${start}...${end}]{
  _id, title, slug, publishedAt, image, description
}`;

const TOTAL_COUNT_QUERY = `count(*[_type == "initiative" && defined(slug.current)])`;

const options = { next: { revalidate: 30 } };

export default async function Initiative({ searchParams }: { searchParams?: { page?: string } }) {
  const currentPage = Number(searchParams?.page) || 1;
  const start = (currentPage - 1) * PER_PAGE;
  const end = start + PER_PAGE;

  const initiatives = await client.fetch<SanityDocument[]>(INITIATIVE_QUERY(start, end), {}, options);
  const total = await client.fetch<number>(TOTAL_COUNT_QUERY);
  const totalPages = Math.ceil(total / PER_PAGE);

  return (
    <section className="pt-10 w-[90%] mx-auto">
      <h2 className="tracking-widest leading-5 text-2xl font-[100] text-[#999797] uppercase mb-7">
        Initiatives
      </h2>
      <div className="flex flex-col justify-center items-start space-y-3">
        <h1 className="font-black text-4xl capitalize">
          Mohammed Adamu - Ramadan <br /> On the Issues.
        </h1>
        <HorizontalLine height={7} />
      </div>

      <article className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 md:gap-6 lg:gap-2 my-8">
        {initiatives.map((initiative) => (
          <Link key={initiative._id} href={`/initiative/${initiative.slug.current}`}>
            <Initiate
              date={initiative.publishedAt}
              title={initiative.title}
              description={initiative.description}
              imageRef={initiative.image}
            />
          </Link>
        ))}
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
        <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
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

