import Image from "next/image"
import HorizontalLine from "./horizontal-line"


// <section className="flex flex-col md:flex-row justify-center items-start md:gap-10 md:pt-19 pt-0 mb-4 mx-4">

const AboutUs = () => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-8 md:py-8 py-2 md:px-8 px-3">
      <div className="relative">
        <Image className="lg:w-full h-[500px] lg:h-[540px] object-contain -mb-4 md:mb-0" src="/about-us.jpg" alt="About Us" width={500} height={400} />
        <h2 className="absolute md:bottom-13.5 bottom-17 bg-secondary text-white uppercase text-sm md:text-lg lg:text-xl text-center font-black md:py-5 md:px-2 lg:py-8 px-4 py-8">Accounting to the good people of Adentan Constituency</h2>
        <p className="absolute bottom-10 md:left-[20%] left-[20%] lg:left-[30%] bg-primary text-white uppercase text-sm text-center font-light py-2 px-4">Still working for you</p>
      </div>
      <div className="flex flex-col justify-start items-start text-left space-y-2 md:leading-10 leading-8">
        <h5 className="text-2xl md:text-3xl font-bold text-center text-gray-700">
          About Us
        </h5>
        <h2 className="text-2xl font-black uppercase"><span className="text-secondary">Meet</span> Mohammed Adamu Ramadan </h2>
        <HorizontalLine />
        <p>Mohammed Adamu Ramadan hails from Ashaley Botwe, a town located in the Adentan Constituency of the Greater Accra Region, Ghana.</p>
        <button className="bg-secondary text-white md:py-2 md:px-6 px-3 py-1 rounded">Meet Ramadan</button>
      </div>
    </section>

  )
}

export default AboutUs
