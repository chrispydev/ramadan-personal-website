import Image from "next/image";
import { IoTimeOutline } from "react-icons/io5"


const Initiate = () => {
  return (
    <section className="space-y-5">
      <Image src={'/initiatives/initiative-1.jpg'} alt='initiative-1' width={300} height={200} className="w-[280px] h-[150px] object-center object-cover" />
      <h4 className="flex justify-start items-center"><IoTimeOutline />Date: 26th May 2020</h4>
      <h5>other Project Project And...</h5>
      <p>The dominant livelihood source for the people in our coastal areas is fishing..</p>
      <button>Readmore</button>
      <hr className="decoration-1 text-secondary" />
    </section>
  )
}

export default Initiate
