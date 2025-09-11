import HorizontalLine from "./horizontal-line"
import InitiativeGallery from './initiative-gallery'

import Link from "next/link"
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const INITIATIVE_QUERY = `*[
  _type == "initiative"
  && defined(slug.current)
]|order(publishedAt desc)[0...8]{_id, title, slug, publishedAt, image, description}`;

const options = { next: { revalidate: 30 } };

const InitiativeGrid = async () => {
  const initiatives = await client.fetch<SanityDocument[]>(INITIATIVE_QUERY, {}, options);


  return (
    <section className="mt-9 md:mx-13 mx-5">
      <article className="flex flex-col items-start">
        <h3 className="text-xl text-gray-500 uppercase tracking-[10px] font-extralight">Initiative</h3>
        <h2 className="mdtext-4xl text-2xl font-black capitalize">Mohammed Adamu Ramadan <br /> On the Issue.</h2>
        <HorizontalLine />
        <article className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-6 lg:gap-2">
          {initiatives.map((initiative) => (
            <Link key={initiative._id} href={`/initiative/${initiative.slug.current}`}>
              <InitiativeGallery title={initiative.title} imageRef={initiative.image} date={initiative.publishedAt} description={initiative.description} />
            </Link>
          ))}

        </article>
      </article>
    </section>
  )
}

export default InitiativeGrid
