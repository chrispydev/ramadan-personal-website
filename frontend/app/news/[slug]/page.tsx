
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa"
import Image from "next/image";

const NEWS_QUERY = `*[_type == "news" && slug.current == $slug][0]`;

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
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getFullYear();

  // Add ordinal suffix (st, nd, rd, th)
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
          ? "rd"
          : "th";

  return `${day}${suffix} ${month} ${year}`;
}


export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const news = await client.fetch<SanityDocument>(
    NEWS_QUERY,
    { slug: params.slug },
    options
  );

  if (!news) {
    return (
      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/" className="hover:underline">
          ← Back to posts
        </Link>
      </main>
    );
  }

  const postImageUrl = news.image
    ? urlFor(news.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>

      <div className="mb-4">
        <h1 className="text-2xl font-medium mb-4 uppercase leading-7">{news.title}</h1>
        <div className="h-2 w-25 bg-secondary" />
      </div>

      {news.publishedAt && (
        <div className="flex items-center gap-2 ">
          <FaCalendarAlt className="text-white p-1 bg-secondary text-2xl" />
          <p className="text-gray-500 text-sm">Event Date on {formatDate(news.publishedAt)}</p>
        </div>
      )}
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={news.title}
          className="w-full object-contain"
          width={550}
          height={310}
        />
      )}


      <div className="prose space-y-4 text-sm">
        {Array.isArray(news.body) && <PortableText value={news.body} />}
      </div>
    </main>
  );
}


