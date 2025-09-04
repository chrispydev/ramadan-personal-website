import Image from "next/image"

const Events = () => {
  return (
    <section className="my-4 ">
      <article className="">
        <div className="flex flex-col justify-center md:flex-row h-full w-[90%] mx-auto">
          <div className="w-full md:w-1/2 p-5 md:h-[350px] lg:h-[275px] h-[300px] " style={{ backgroundImage: 'url(/events.jpg)', backgroundSize: 'contain', backgroundPosition: 'center' }}>
          </div>
          <div className="bg-secondary text-white p-5 space-y-3 md:w-1/2">
            <h3 className="text-2xl uppercase">Events</h3>
            <h2 className="font-bold text-3xl">Mohammed Adamu Ramadan</h2>
            <p className="text-sm">
              According to Sir Francis Bacon (1605), Cleanliness of the body was ever
              deemed to proceed from a due reverence to God. Today, with reference to
              John Wesley, this assertion has been simplified as ‘cleanliness is next
              to Godliness.’ ...
            </p>
            <button className="bg-black text-white py-3 px-5 font-extralight cursor-pointer">
              READ MORE
            </button>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Events
