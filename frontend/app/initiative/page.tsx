import HorizontalLine from "../components/horizontal-line";
import Initiate from "../components/initiate";
import Link from "next/link"
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const INITIATIVE_QUERY = `*[
  _type == "initiative"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image, description}`;

const options = { next: { revalidate: 30 } };



export default async function Initiative() {
  const initiatives = await client.fetch<SanityDocument[]>(INITIATIVE_QUERY, {}, options);


  return (
    <section className="pt-10 w-[90%] mx-auto">
      <h2 className="tracking-widest leading-5 text-2xl font-[100] text-[#999797] font-weight uppercase mb-7">Initiatives</h2>
      <div className="flex flex-col justify-center items-start space-y-3">
        <h1 className="font-black text-4xl capitalize">Mohammed Adamu - Ramadan <br /> On the Issues.</h1>
        <HorizontalLine height={7} />
      </div>

      <article className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 md:gap-6 lg:gap-2 my-8">
        {initiatives.map((initiative) => (
          <Link key={initiative._id} href={`/initiative/${initiative.slug.current}`}>
            <Initiate date={initiative.publishedAt} title={initiative.title} description={initiative.description} imageRef={initiative.image} />
          </Link>
        ))}

      </article>

    </section>
  )
}
