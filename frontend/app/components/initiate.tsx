import { FC } from "react"
import Image from "next/image";
import { IoTimeOutline } from "react-icons/io5"
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface InitiateProps {
  imageRef?: string;
  date?: string;
  title?: string;
  description?: string;
}

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


const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const Initiate: FC<InitiateProps> = ({ imageRef, date, title, description }) => {
  const imageUrl = imageRef ? urlFor(imageRef)?.url() : null;

  return (
    <section className="space-y-2 mb-4">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title ?? "initiative"}
          width={300}
          height={200}
          className="w-[280px] h-[150px] object-top object-cover transition duration-500 hover:brightness-110"
        />
      )}
      <div className="flex justify-start items-center space-x-2">
        <IoTimeOutline />
        <p className="text-sm">
          Date:{formatDate(date)}
        </p>
      </div>
      <h5 className="font-black">{title ?? "Untitled Initiative"}</h5>
      <p className="text-sm font-extralight leading-6">{description}</p>
      <button className="bg-black hover:bg-secondary text-white py-2 px-5 cursor-pointer">Read more</button>
      <hr className="decoration-1 text-secondary" />
    </section>
  )
}

export default Initiate

