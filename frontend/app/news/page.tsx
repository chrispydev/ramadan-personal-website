
import Link from "next/link"
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const EVENT_QUERY = `*[
  _type == "event"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image, description}`;

const options = { next: { revalidate: 30 } };



export default async function News() {
  const events = await client.fetch<SanityDocument[]>(EVENT_QUERY, {}, options);

  return (
    <section className="my-4 ">
      {events.map((event) => (
        <Link key={event._id} href={`/events/${event.slug.current}`}>

          <article className="">
            <div className="flex flex-col justify-center md:flex-row h-full w-[90%] mx-auto">
              <div className="w-full md:w-1/2 p-5 md:h-[350px] lg:h-[275px] h-[300px] " style={{ backgroundImage: 'url(/events.jpg)', backgroundSize: 'contain', backgroundPosition: 'center' }}>
              </div>
              <div className="bg-secondary text-white p-5 space-y-3 md:w-1/2">
                <h3 className="text-2xl uppercase">Events</h3>
                <h2 className="font-bold text-3xl line-clamp-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', lineClamp: 2 }}>{event.title}</h2>
                <p className="text-sm line-clamp-2">
                  {event.description}.
                </p>
                <button className="bg-black text-white py-3 px-5 font-extralight cursor-pointer">
                  READ MORE
                </button>
              </div>
            </div>
          </article>
        </Link>
      ))}

    </section>
  )
}

