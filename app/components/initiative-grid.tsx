import HorizontalLine from "./horizontal-line"
import InitiativeGallery from './initiative-gallery.tsx'

const InitiativeGrid = () => {
  return (
    <section className="mt-9 mx-13">
      <article className="flex flex-col items-start">
        <h3 className="text-xl text-gray-500 uppercase tracking-[10px] font-extralight">Initiative</h3>
        <h2 className="text-4xl font-black capitalize">Mohammed Adamu Ramadan <br /> On the Issue.</h2>
        <HorizontalLine />
        <article className="grid grid-cols-3 gap-2">
        <InitiativeGallery />
        <InitiativeGallery />
        <InitiativeGallery />
        </article>
      </article>
    </section>
  )
}

export default InitiativeGrid
