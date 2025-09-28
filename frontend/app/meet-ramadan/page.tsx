import HorizontalLine from "../components/horizontal-line";
import Image from "next/image";

export default function MeetRamadan() {
  return (
    <main className="bg-primary p-3 md:p-8 text-white">
      {/* <article className="my-4 mx-1 md:mx-8 mt-4  md:mt-10 flex md:flex-row flex-col justify-center items-start w-[100%} md:w-[80%]"> */}
      <article className="grid md:grid-cols-2 grid-cols-1 gap-4 my-4 mx-1 justify-center items-start w-[100%} md:w-[80%]">
        <div className="flex flex-col justify-start items-start text-left space-y-2 leading-10 mx-1 md:m-4 pb-4 md:pb-0">
          <h2 className="md:text-4xl text-2xl font-black uppercase "><span className="text-secondary">Meet</span> Ramadan  </h2>
          <HorizontalLine />
          <p className="text-sm leadding-4">Mohammed Adamu Ramadan hails from Ashaley Botwe, a town located in the Adentan Constituency of the Greater Accra Region, Ghana.</p>
        </div>
        <div>
          <Image src={"/meet-ramadan.jpg"} alt="Meet Ramadan" width={700} height={600} className="h-[400px] w-[680px]  shadow-lg" />
        </div>
      </article>
    </main>

  );
}
