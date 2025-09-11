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
            Mohammend Adamu Ramadan embodies a rare and admirable trait possessed by only a few individuals worldwide. Through his initiatives, selfless commitment and decisive leadership, he has created numerous projects and initiatives that has brought lasting development and meaningful tranformation to the Adentan Constituency. He&apos;s also creating opportunities, promoting education, and fostering sustainable development. His commitment to social responsibility and community engagement reflects his belief in the power of collective action to bring about meaningful change to Adentan Constituency and Ghana as a whole.

          </p>
          <h5 className={`font-bold text-xl  capitalize md:mt-6 mt-2 mb-5 md:mb-0 decoration-primary   `} style={{ fontFamily: "TuesdayNight, sans-serif" }}>- Ramadan Adamu Mohammend</h5>
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
