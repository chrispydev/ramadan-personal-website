import HorizontalLine from "../components/horizontal-line";
import Initiate from "../components/initiate";
import Link from "next/link"
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

export default async function ContactUs() {


  return (
    <section className="pt-10 w-[90%] mx-auto">
      <div>
        <h4 className="text-2xl uppercase mb-1 font-bold">Contact Details</h4>
        <div className="w-20 h-2 bg-secondary" />
      </div>
      <ul>
            <li>
          <span className="font-bold">POSTAL ADDRESS</span><br/>
    Mohammed Adamu Ramadan<br/>
    Lotto Kiosk, off Aviation Rd Adentan<br/>
    Greater Accra Region - Ghana.</li>
        <li>Adentan</li>
        <li>
        <a href='tel:+233245812888'>+233 245 812 888</a>

        </li>
        <li>
        <a href='tel:+233544899754'>+233 544 899 754</a>
        </li>
        <li>
          <a href="mailto:ramadan5555@hotmail.com"> ramadan5555@hotmail.com</a></li>
      </ul>

    </section>
  )
}

