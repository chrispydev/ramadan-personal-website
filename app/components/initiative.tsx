import Image from "next/image"
import HorizontalLine from "./horizontal-line"

const Initiative = () => {
  return (
    <section className="parallax text-white px-10 py-10">
      <article className="grid grid-cols-2 gap-10 z-10 place-items-center">
        <div className="">
          <h2 className="font-black text-2xl">Advancing the Common Good with an Uncommon Will</h2>
          <HorizontalLine />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugia</p>
        </div>
        <div className="">
          <Image src={'/project/project-1.jpg'} alt="project" width={400} height={530} />
        </div>
      </article>
    </section>
  )
}

export default Initiative
