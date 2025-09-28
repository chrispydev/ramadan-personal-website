import Image from "next/image";
import Team from "../components/team";

export default function OurTeams() {

  return (
    <section className="my-4 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-black mb-2">My Team </h1>
        <div className="h-2 w-20 bg-secondary" />
        <p className="text-center text-sm mt-8">Winning the 2020 and 2024 elections with Mohammed Adamu Ramadan  requires a collective<br /> effort. Volunteerism is the key word for victory. Self-organize, meet<br /> with people and deliver...</p>
        <article className="flex flex-col justify-center items-center mx-8 gap-8">
          <Team name="Mohammed Adamu Ramadan" imgSrc="/team.jpg" role="Member of Parliament" show />
          <div className="flex justify-center items-center gap-4">
            <Team name="Osman Issaka" imgSrc="/team1.jpeg" role="Special Assistant" />
            <Team name="Edem Rudolof Agbenorku" imgSrc="/team3.jpeg" role="Research Assistant" />
            <Team name="Promise Kwesi Oniwor" imgSrc="/team2.jpeg" role="Administrative Assistant" />
            <Team name="Jane Asiwome" imgSrc="/team2.jpeg" role="Secetery" />
          </div>

          <div>
            {/* Volunteerism*/}
            <h1 className="text-2xl font-bold uppercase text-center underline">Volunteers</h1>
            <div>
              <Team name="Jane Asiwome" imgSrc="/team2.jpeg" role="Secetery" />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

