import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";

const INITIATIVE_QUERY = `*[_type == "initiative" && slug.current == $slug][0]`;

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


export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const initiative = await client.fetch<SanityDocument>(
    INITIATIVE_QUERY,
    { slug: params.slug },
    options
  );

  if (!initiative) {
    return (
      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/" className="hover:underline">
          ← Back to posts
        </Link>
      </main>
    );
  }

  const postImageUrl = initiative.image
    ? urlFor(initiative.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>

      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={initiative.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}

      <h1 className="text-4xl font-bold mb-8">{initiative.title}</h1>

      <div className="prose">
        {initiative.publishedAt && (
          <p>Published: {formatDate(initiative.publishedAt)}</p>
        )}
        {Array.isArray(initiative.body) && <PortableText value={initiative.body} />}
      </div>
    </main>
  );
}

