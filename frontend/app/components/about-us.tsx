import Image from "next/image"
import HorizontalLine from "./horizontal-line"

const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-start md:gap-10 md:pt-19 pt-0 mb-4 mx-4">
      <Image className="lg:w-full h-[500px] lg:h-[540px] object-contain -mb-4 md:mb-0" src="/about-us.jpg" alt="About Us" width={500} height={400} />
      <div className="flex flex-col justify-start items-start text-left space-y-2 leading-10">
        <h5 className="text-2xl md:text-3xl font-bold text-center text-gray-700">
          About Us
        </h5>
        <h2 className="text-2xl font-black uppercase "><span className="text-secondary">Meet</span> Mohammed Adamu Ramadan </h2>
        <HorizontalLine />
        <p>Mohammed Adamu Ramadan hails from Ashaley Botwe, a town located in the Adentan Constituency of the Greater Accra Region, Ghana.</p>
        <button className="bg-secondary text-white py-2 px-6 rounded">Meet Ramadan</button>
      </div>
    </section>

  )
}

export default AboutUs
