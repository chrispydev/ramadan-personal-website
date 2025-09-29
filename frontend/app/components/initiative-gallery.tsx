import { FC } from "react";
import Image from "next/image";
import HorizontalLine from "./horizontal-line";
import { FaBell } from "react-icons/fa";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface InitiativeGalleryProps {
  title: string;
  date: string;
  imageRef?: string;
  description: string;
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

const InitiativeGallery: FC<InitiativeGalleryProps> = ({
  title,
  date,
  description,
  imageRef,
}) => {
  const imageUrl = imageRef
    ? urlFor(imageRef)?.width(300).height(200).url()
    : null;
  console.log(imageUrl);

  return (
    <section className="mt-8 flex flex-col justify-center items-start space-y-3">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Initiative Gallery"
          width={400}
          height={300}
          className="w-[350px] h-[200px] shadow-lg"
        />
      )}
      <h4 className="font-black text-sm uppercase">{title}</h4>
      <HorizontalLine />
      <div className="text-sm font-extralight flex justify-start items-center space-x-2">
        <FaBell className="text-secondary" />
        <p>By Admin on {formatDate(date)}</p>
      </div>
      <span className="border-gray-900 border-b-2 border-dotted h-1 w-full" />
      <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      <span className="bg-secondary h-[1px] w-full" />
    </section>
  );
};

export default InitiativeGallery;
