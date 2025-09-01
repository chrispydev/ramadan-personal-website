import HorizontalLine from "./horizontal-line"
import InitiativeGallery from './initiative-gallery.tsx'

const InitiativeGrid = () => {
  return (
    <section className="mt-9 md:mx-13 mx-5">
      <article className="flex flex-col items-start">
        <h3 className="text-xl text-gray-500 uppercase tracking-[10px] font-extralight">Initiative</h3>
        <h2 className="mdtext-4xl text-2xl font-black capitalize">Mohammed Adamu Ramadan <br /> On the Issue.</h2>
        <HorizontalLine />
        <article className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-6 lg:gap-2">
          <InitiativeGallery />
          <InitiativeGallery />
          <InitiativeGallery />
        </article>
      </article>
    </section>
  )
}

export default InitiativeGrid
