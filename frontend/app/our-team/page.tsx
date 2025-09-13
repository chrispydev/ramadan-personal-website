import Image from "next/image";

export default function OurTeams() {

  return (
    <section className="my-4 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-black mb-2">Our Campain Staff</h1>
        <div className="h-2 w-20 bg-secondary" />
        <p className="text-center text-sm mt-8">Winning the 2024 elections with Dorcas Affo-Toffey requires a collective<br /> effort. Volunteerism is the key word for victory 2020. Self-organize, meet<br /> with people and deliver...</p>
        <div >
          <Image src={"/team.png"} alt="Our Team" width={300} height={500} className="mt-8 rounded-lg shadow-lg" />
          <div className="bg-gray-100 p-4 space-y-3">
            <h3 className="font-black">Our Team</h3>
            <h5 className="text-grayText text-sm">You Are Part of Our Team! <br />Yes You</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

