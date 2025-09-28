import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import { GoFlame } from "react-icons/go";

const EVENT_QUERY = `*[_type == "event" && slug.current == $slug][0]`;

const RELEATED_EVENT_QUERY = `*[
  _type == "event"
  && defined(slug.current)
]|order(publishedAt desc)[0...6]{_id, title, slug, publishedAt, image, description}`;

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
  const event = await client.fetch<SanityDocument>(
    EVENT_QUERY,
    { slug: params.slug },
    options
  );

  const related_events = await client.fetch<SanityDocument[]>(
    RELEATED_EVENT_QUERY,
    {},
    options
  );

  if (!event) {
    return (
      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/" className="hover:underline">
          ← Back to posts
        </Link>
      </main>
    );
  }

  const postImageUrl = event.image ? urlFor(event.image)?.url() : null;

  return (
    <main className="grid md:grid-cols-3 grid-cols-1 gap-4 md:p-8 p-4">
      <article className="container mx-auto min-h-screen max-w-3xl flex flex-col gap-4 col-span-2">
        <Link href="/" className="hover:underline">
          ← Back to posts
        </Link>

        <div className="mb-4">
          <h1 className="text-2xl font-medium mb-4 uppercase leading-7">
            {event.title}
          </h1>
          <div className="h-2 w-25 bg-secondary" />
        </div>

        {event.publishedAt && (
          <div className="flex items-center gap-2 ">
            <FaCalendarAlt className="text-white p-1 bg-secondary text-2xl" />
            <p className="text-gray-500 text-sm">
              Event Date on {formatDate(event.publishedAt)}
            </p>
          </div>
        )}
        {postImageUrl && (
          <Image
            src={postImageUrl}
            alt={event.title}
            className="w-full object-contain"
            width={550}
            height={310}
          />
        )}

        <div className="prose space-y-4 text-sm">
          {Array.isArray(event.body) && <PortableText value={event.body} />}
        </div>
      </article>

      <article className="container mx-auto min-h-screen">
        <div>
          <div className="flex justify-start items-center">
            <GoFlame className="text-2xl text-grayText mr-2" />
            <h2 className="font-extralight lg:tracking-[1rem] tracking-widest text-xl text-grayText uppercase">
              Related News
            </h2>
          </div>
          <div className="h-2 w-20 bg-secondary mb-8" />
        </div>
        {related_events.map((related_event) => {
          const imageUrl = related_event.image
            ? urlFor(related_event.image)?.url()
            : null;

          return (
            <Link
              key={related_event._id}
              href={`/news/${related_event.slug.current}`}
            >
              <div className="flex justify-center items-center gap-4">
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    width={100}
                    height={100}
                    alt={related_event.title ?? "Related event"}
                    className="w-[100px] h-[100px] object-cover mb-4"
                  />
                )}
                <h2 className="font-bold text-sm mb-2 truncate">
                  {related_event.title}
                </h2>
              </div>
              <div className="w-full h-[1px] mb-2 bg-grayText" />
            </Link>
          );
        })}
      </article>
    </main>
  );
}
