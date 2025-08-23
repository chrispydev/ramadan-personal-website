import Image from "next/image"
import HorizontalLine from "./horizontal-line"

const InitiativeGallery = () => {
  return (
    <section className="mt-8 flex flex-col justify-center items-start space-y-3">
      <Image src={`/project/project-1.jpg`} alt="Initiative Gallery" width={400} height={300} className="w-[350px] h-[200px] shadow-lg" />
      <h4 className="font-black text-sm uppercase">Our Fisherflock</h4>
      <HorizontalLine />
      <p className="text-sm font-bold">By Admin on February 03 2020</p>
      <span className="bg-black h-[1px] w-full" />
      <p className="text-sm text-gray-600">Dorcas Affo-Toffey tackles Sport and Entertainment in Jomoro. As part of her support for the sports and entertainment sectors, the action woman has executed the following...</p>
      <span className="bg-black h-[1px] w-full" />
    </section>
  )
}

export default InitiativeGallery

