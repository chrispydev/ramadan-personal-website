import Link from "next/link"
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { randomInt } from "crypto";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const EVENT_QUERY = `*[
  _type == "event"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image, description}`;

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const Events = async () => {
  const events = await client.fetch<SanityDocument[]>(EVENT_QUERY, {}, options);

  if (!events || events.length === 0) {
    return <p>No events available</p>;
  }

  // If only one event, always pick the first one
  const randint =
    events.length > 1 ? randomInt(0, events.length) : 0;

  console.log("Random index:", randint);

  const event = events[randint];


  return (
    <section className="my-4 ">
      <article className="">
        <div className="flex flex-col justify-center md:flex-row h-full w-[90%] mx-auto">
          <div className="w-full md:w-1/2 p-5  md:h-[300px] h-[350px] " style={{ backgroundImage: `url(${urlFor(event.image)?.url()})`, backgroundSize: 'contain', backgroundPosition: 'center' }}>
          </div>
          <div className="bg-secondary text-white p-5 space-y-3 md:w-1/2">
            <h3 className="text-2xl uppercase">Events</h3>
            <h2 className="font-bold text-3xl line-clamp-2">{event.title}</h2>
            <p className="text-sm">
              {event.description}
            </p>

            <Link href={`/events/${event.slug.current}`}>
              <button className="bg-black text-white py-3 px-5 font-extralight cursor-pointer">
                READ MORE
              </button>
            </Link>

          </div>
        </div>
      </article>
    </section >
  )
}

export default Events
