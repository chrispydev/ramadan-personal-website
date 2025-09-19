"use client";

import Link from "next/link"
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("🎉 Subscribed successfully!");
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
    <section className="mt-10 ">
      <article className="grid md:grid-cols-4 grid-cols-2  gap-8 px-8">
        <div className="space-y-8">
          <h5 className="font-black uppercase">Socal Media</h5>
          <ul className="text-sm space-y-4">
            <li><a href="https://web.facebook.com/profile.php?id=100063524448476" target="_blank">Facebook</a></li>
            <li><a href="https://x.com/adamuramadan?s=21" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/mohammedadamuramadan?igsh=MW82NGF5eXd3NGZ2cA==" target="_blank">Instagram</a></li>
            <li><a href="https://wa.me/+233245812888" target="_blank">WhatsApp</a></li>
          </ul>
        </div>
        <div className="space-y-8">
          <h5 className="font-black uppercase">Quick Links</h5>
          <ul className="text-sm space-y-4">
            <li><Link href={'/meet-ramadan'}>Meet Ramadan</Link></li>
            <li><Link href={'/initiative'}>Initiative</Link></li>
            <li><Link href={'/events'}>Events</Link></li>
            <li><Link href={'/news'}>News</Link></li>
            <li><Link href={'/contact-us'} >Contact Us</Link></li>
          </ul>
        </div>
        <div className="space-y-8">
          <h5 className="font-black uppercase">About Us </h5>
          <ul className="text-sm space-y-4">
            <li><Link href={"/our-team"}>Our Team</Link></li>
            <li><Link href={"/privary-and-policy"}>Privary Policy</Link></li>
            <li><Link href={"/terms-and-conditions"}>Terms and Conditions</Link></li>
            <li><Link href={'/contact-us'} >Contact Us</Link></li>
          </ul>
        </div>
        <div className="space-y-8">
          <h5 className="font-black uppercase">News Letter</h5>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-8">
            <input id="email" name="email" type="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white py-3 px-4 text-gray-900 w-full focus:outline-0 shadow" placeholder="Youremail@gmail.com" />
            <button
              type="submit"
              disabled={loading}
              className="bg-secondary py-3 px-4 text-white tracking-wide font-extralight w-full disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
          {message && <p className="text-center text-sm">{message}</p>}
        </div>
      </article>
      <div className="h-[1px] flex justify-center items-center mx-8 my-5 w-[95%] bg-black" />
      <p className="text-center text-sm my-5">2025 © Mohammed Adamu Ramadan | All Rights Reserved</p>
    </section>
  )
}

export default Footer
