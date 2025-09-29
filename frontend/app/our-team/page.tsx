import Image from "next/image";
import Team from "../components/team";

export default function OurTeams() {
  return (
    <section className="my-4 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-black mb-2">My Team </h1>
        <div className="h-2 w-20 bg-secondary" />
        <article className="flex flex-col justify-center items-center flex-wrap md:mx-8 mx-2 gap-8">
          <Team
            name="Mohammed Adamu Ramadan"
            imgSrc="/team.jpg"
            role="Member of Parliament"
            show
          />
          <div>
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-4xl font-black"> Staff </h1>
              <div className="h-2 w-20 bg-secondary" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Team
                name="Edem Rudolf Agbenorku"
                imgSrc="/team3.jpeg"
                role="Research Assistant"
              />
              <Team
                name="Osman Issaka"
                imgSrc="/team1.jpeg"
                role="Special Assistant"
              />
              <Team
                name="Promise Kwesi Oniwor"
                imgSrc="/team2.jpeg"
                role="Administrative Assistant"
              />
              <Team name="Jane Asiwome" imgSrc="/team4.jpeg" role="Secetery" />
            </div>
          </div>

          <div>
            {/* Volunteerism*/}
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-4xl font-black"> Volunteers </h1>
              <div className="h-2 w-20 bg-secondary" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 ">
              <Image
                src={"/v1.jpg"}
                alt="Our Team"
                width={300}
                height={500}
                className="mt-8 rounded-lg shadow-lg h-[200px] w-[200px] object-cover"
              />
              <Image
                src={"/v2.jpg"}
                alt="Our Team"
                width={300}
                height={500}
                className="mt-8 rounded-lg shadow-lg h-[200px] w-[200px] object-cover"
              />
              <Image
                src={"/v3.jpg"}
                alt="Our Team"
                width={300}
                height={500}
                className="mt-8 rounded-lg shadow-lg h-[200px] w-[200px] object-cover"
              />
              <Image
                src={"/v4.jpg"}
                alt="Our Team"
                width={300}
                height={500}
                className="mt-8 rounded-lg shadow-lg h-[200px] w-[200px] object-cover"
              />
              <Image
                src={"/v5.jpg"}
                alt="Our Team"
                width={300}
                height={500}
                className="mt-8 rounded-lg shadow-lg h-[200px] w-[200px] object-cover"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
