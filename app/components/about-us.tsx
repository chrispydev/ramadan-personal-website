import Image from "next/image"
import HorizontalLine from "./horizontal-line"

const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-start gap-10 md:mb-4 mx-4">
      <Image className="lg:w-full h-[500px] lg:h-[560px] object-contain" src="/about-us.jpg" alt="About Us" width={500} height={400} />
      <div className="flex flex-col justify-start items-start text-left space-y-2 leading-10">
        <h5 className="text-2xl md:text-3xl font-bold text-center text-slate-500">
          About Us
        </h5>
        <h2 className="text-lg md:text-2xl font-black uppercase "><span className="text-secondary">Meet</span> Mohammed <br />Adamu Ramadan </h2>
        <HorizontalLine />
        <p>Adenta A Town located at the Minicipal Assembly</p>
        <button className="bg-secondary text-white py-2 px-6 rounded">Meet Ramadan</button>
      </div>
    </section>

  )
}

export default AboutUs
