import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import HorizontalLine from "../components/horizontal-line";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const EVENTS_QUERY = `*[
  _type == "event" && defined(slug.current)
]|order(publishedAt desc)[$start...$end]{
  _id, title, slug, publishedAt, image, description
}`;

const COUNT_QUERY = `count(*[_type == "event" && defined(slug.current)])`;

const options = { next: { revalidate: 30 } };

export default async function EventsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams?.page || "1", 10);
  const limit = 5; // events per page
  const start = (page - 1) * limit;
  const end = start + limit;

  // Fetch paginated events
  const events = await client.fetch<SanityDocument[]>(
    EVENTS_QUERY,
    { start, end },
    options
  );

  // Fetch total count for pagination
  const totalEvents = await client.fetch<number>(COUNT_QUERY);
  const totalPages = Math.ceil(totalEvents / limit);

  return (
    <section className="my-4">
      {events.map((event) => (
        <Link key={event._id} href={`/events/${event.slug.current}`}>
          <article>
            <div className="flex flex-col justify-center md:flex-row h-full w-[90%] mx-auto my-5">
              <div
                className="w-full md:w-1/2 p-5 md:h-[350px] lg:h-[275px] h-[300px]"
                style={{
                  backgroundImage: `url(${urlFor(event.image)?.url()})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="bg-secondary text-white p-5 space-y-3 md:w-1/2">
                <h2 className="font-bold text-3xl line-clamp-2">
                  {event.title}
                </h2>
                <p className="text-sm line-clamp-2">{event.description}</p>
                <button className="bg-black text-white py-3 px-5 font-extralight cursor-pointer">
                  READ MORE
                </button>
              </div>
            </div>
          </article>
        </Link>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        {page > 1 && (
          <Link
            href={`?page=${page - 1}`}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Previous
          </Link>
        )}

        <span className="px-4 py-2">
          Page {page} of {totalPages}
        </span>

        {page < totalPages && (
          <Link
            href={`?page=${page + 1}`}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Next
          </Link>
        )}
      </div>
    </section>
  );
}
