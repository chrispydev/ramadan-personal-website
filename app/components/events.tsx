import Image from "next/image"

const Events = () => {
  return (
    <section className="my-4">
      <div className="px-10 w-[full] h-full grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <Image className="w-full lg:h-[253px] md:h-[348px] h-[200px] object-fill object-center" src={'/events.jpg'} alt="event" width={100} height={250} />
        </div>
        <div className="bg-secondary text-white p-5 space-y-3">
          <h3 className="text-2xl uppercase">Events</h3>
          <h2 className="font-bold text-3xl">Mohammed Adamu Ramadan</h2>
          <p className="text-sm">According to Sir Francis Bacon (1605), Cleanliness of the body was ever deemed to proceed from a due reverence to God. Today, with reference to John Wesley, this assertion has been simplified as ‘cleanliness is next to Godliness.’ Living...</p>
          <button className="bg-black text-white py-3 px-5 font-extralight cursor-pointer">READ MORE</button>
        </div>
      </div>

    </section>
  )
}

export default Events
