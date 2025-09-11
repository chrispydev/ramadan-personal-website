
import Link from "next/link"
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const NEWS_QUERY = `*[
  _type == "news"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image, description}`;

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };



function formatDate(dateString?: string) {
  if (!dateString) return "N/A";

  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "short" });


  return `${day} ${month} `;
}

export default async function News() {
  const news = await client.fetch<SanityDocument[]>(NEWS_QUERY, {}, options);


  return (
    <section className="my-4 w-[90%] mx-auto">
      <div className="space-y-3">
        <h2 className="font-extralight tracking-[1rem] text-xl text-grayText uppercase">News</h2>
        <h1 className="font-black text-3xl">Latest trend.</h1>
        <div className="h-2 w-20 bg-secondary mb-8" />
      </div>

      <article className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {news.map((news) => (
          <Link key={news._id} href={`/news/${news.slug.current}`}>
            <div className="">

              {urlFor(news.image) && (
                <Image
                  src={urlFor(news.image).url()!}
                  width={600}
                  height={400}
                  alt={news.title} className="w-full h-48 object-cover  mb-4" />
              )}
              <div className="flex justify-center items-start gap-4">
                <div className="">
                  <p className="text-white bg-secondary py-2 px-3 font-bold">{formatDate(news.publishedAt)}</p>
                </div>
                <div className="">
                  <h2 className="font-black text-md mb-2 uppercase">{news.title}</h2>
                  <p className="text-sm text-gray-600 trancate-4">{news.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </article>
    </section>
  )
}

