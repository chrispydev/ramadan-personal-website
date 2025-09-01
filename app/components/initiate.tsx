import Image from "next/image";
import { IoTimeOutline } from "react-icons/io5"


const Initiate = () => {
  return (
    <section className="space-y-2 mb-4">
      <Image src={'/initiatives/initiative-1.jpg'} alt='initiative-1' width={300} height={200} className="w-[280px] h-[150px] object-center object-cover" />
      <div className="flex justify-start items-center space-x-2">
        <IoTimeOutline className="" />
        <p className="text-sm">Date: 26th May 2020</p>
      </div>
      <h5 className="font-black">other Project Project And...</h5>
      <p className="text-sm font-extralight leading-6">The dominant livelihood source for the people in our coastal areas is fishing..</p>
      <button className="bg-black text-white py-2 px-5 cursor-pointer">Readmore</button>
      <hr className="decoration-1 text-secondary" />
    </section>
  )
}

export default Initiate
