import Image from "next/image";

const galleryImages = [
  { src: "/gallery/gallery1.png", alt: "Community Event" },
  { src: "/gallery/gallery2.jpg", alt: "Educational Support" },
  { src: "/gallery/gallery3.jpg", alt: "Volunteer Program" },
  { src: "/gallery/gallery4.jpg", alt: "Workshop Session" },
  { src: "/gallery/gallery5.jpg", alt: "Youth Empowerment" },
  { src: "/gallery/gallery6.jpg", alt: "Career Guidance" },
  { src: "/gallery/gallery7.png", alt: "Mentorship Program" },
  { src: "/gallery/gallery8.jpg", alt: "Social Intervention" },
  { src: "/gallery/gallery9.jpg", alt: "Constituency Project" },
  { src: "/gallery/gallery10.jpg", alt: "Community Outreach" },
];

export default function GalleryPage() {
  return (
    <section className="w-[90%] mx-auto py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h5 className="uppercase text-secondary font-bold tracking-widest">
          Our Gallery
        </h5>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-4">
          Memorable Moments
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore highlights from our initiatives, events, and community
          engagements. Each moment captured reflects the impact we are creating
          together.
        </p>
      </div>

      {/* Masonry Style Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {galleryImages.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-md">
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="w-full mb-4 rounded-xl object-cover transition duration-500 hover:scale-105 hover:brightness-110 hover:contrast-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
