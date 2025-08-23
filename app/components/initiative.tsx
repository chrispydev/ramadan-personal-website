import Image from "next/image"
import HorizontalLine from "./horizontal-line"
import { Playwrite_CA } from "next/font/google"

const playwrite = Playwrite_CA({
  variable: "--font-playwrite-canyon",
  weight: ["100", "200", "300", "400"],
})


const Initiative = () => {
  return (
    <section className="parallax text-white px-10 py-10">
      <article className="grid grid-cols-2 gap-2 place-items-center relative z-10">
        <div className="flex flex-col justify-center items-start">
          <h2 className="font-black text-2xl">
            Advancing the Common Good with an Uncommon Will
          </h2>
          <HorizontalLine height={7} />
          <p className="leading-6 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis. Curabitur non nulla sit amet nisl tempus convallis
            quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae. Donec sollicitudin molestie malesuada.
            Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit.
            Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem
            ut libero malesuada feugia
          </p>
          <h5 className={`font-light text-sm underline mt-6 decoration-primary italic ${playwrite.className} `}>- John Doe, CEO</h5>
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
