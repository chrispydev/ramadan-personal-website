import Image from "next/image"
import HorizontalLine from "./horizontal-line"
import { Playwrite_CA } from "next/font/google"

const playwrite = Playwrite_CA({
  variable: "--font-playwrite-canyon",
  weight: ["100", "200", "300", "400"],
})


const Initiative = () => {
  return (
    <section className="parallax text-white md:px-10 px-5 md:py-10 py-4">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center relative z-10">
        <div className="flex flex-col justify-center items-start">
          <h2 className="font-black text-xl md:text-2xl">
            Advancing the Common Good with an Uncommon Will
          </h2>
          <HorizontalLine height={5} />
          <p className="leading-6 mt-6 text-sm md:text-base">
            Mohammend Adamu Ramadan is dedicated to making a positive impact in the lives of individuals and communities. Through his initiatives, he strives to create opportunities, promote education, and foster sustainable development. His commitment to social responsibility and community engagement reflects his belief in the power of collective action to bring about meaningful change.
          </p>
          <h5 className={`font-light text-sm capitalize md:mt-6 mt-2 mb-5 md:mb-0 decoration-primary italic ${playwrite.className} `}>- Ramadan Adamu Mohammend</h5>
        </div>
        <div>
          <Image
            src={"/project/project-1.jpg"}
            alt="project"
            width={500}
            height={530}
          />
        </div>
      </article>
    </section>
  )
}

export default Initiative
