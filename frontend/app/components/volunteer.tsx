'use client'

import Image from "next/image"
import HorizontalLine from "./horizontal-line"
import { useState } from "react";

const Volunteer = () => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    setMessage("");

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("🎉 Thank you for volunteering!");
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Failed to subscribe.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="#volunteer" className="bg-primary text-white md:py-8 py-4 px-4 md:px-10 my-5 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col justify-start items-start space-y-8 w-full mr-8">
        <h4 className="text-2xl uppercase tracking-wider">Volunteer</h4>
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl uppercase font-black">Play a Role</h1>
          <HorizontalLine height={5} />
        </div>
        <p className="tracking-wider font-extralight text-sm">Winning the 2020 elections with Mohammend Adamu Ramadan requires a collective effort. Volunteerism is the key word for victory 2020. Self-organize, meet with people and deliver her messages. Dorcas is not a glimmer of hope but absolute hope! Talk to someone today!</p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-start gap-4 w-full">
          <input onChange={(e) => setEmail((e.target.value))} value={email} id="email" name="email" type="email" className="bg-white py-3 w-full px-4 text-gray-900 focus:outline-0 shadow" placeholder="Youremail@volunteer.com" />
          <button disabled={loading} type="submit" className="bg-secondary py-3 px-4 text-white w-full  tracking-wide font-black">{loading ? 'Submitting...' : 'SIGN UP TO VOLUNTEER'}</button>
        </form>
        {message && <p className="text-sm">{message}</p>}
      </div>
      <div className="float-end">
        <Image src={'/about-us-removebg-preview.png'} alt="about Ramadan Adamu" width={400} height={400} />
      </div>
    </section>
  )
}

export default Volunteer
