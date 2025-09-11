import HorizontalLine from "../components/horizontal-line";
import Image from "next/image";

export default function MeetRamadan() {
  return (
    <main className="bg-primary p-3 md:p-8 text-white">
      <article className="m-4 md:mx-8 mt-4  md:mt-10 flex md:flex-row flex-col justify-center items-start w-[100%} md:w-[80%]">
        <div className="flex flex-col justify-start items-start text-left space-y-2 leading-10 m-4 pb-4 md:pb-0">
          <h2 className="md:text-4xl text-2xl font-black uppercase "><span className="text-secondary">Meet</span> Ramadan  </h2>
          <HorizontalLine />
          <p className="text-sm leadding-4">Mohammed Adamu Ramadan hails from Ashaley Botwe, a town located in the Adentan Constituency of the Greater Accra Region, Ghana.</p>
        </div>
        <div>
          <Image src={"/about-us.jpg"} alt="Meet Ramadan" width={400} height={600} className="h-[400px] w-full  object-cover  shadow-lg" />
        </div>
      </article>
    </main>

  );
}
