import HorizontalLine from "../components/horizontal-line";
import { FaRegPaperPlane } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

export default async function ContactUs() {


  return (
    <section className="pt-10 w-[90%] mx-auto grid grid-cols-2">
      <article>
        <div>
          <h4 className="text-2xl uppercase mb-1 font-bold">Contact Details</h4>
          <div className="w-20 h-2 bg-secondary" />
        </div>
        <div className="flex flex-col justify-center my-8 items-start space-y-4">
          <div className="flex justify-center items-start gap-8">
            <FaRegPaperPlane />
            <div className="text-sm">
              <span className="font-bold">POSTAL ADDRESS</span><br />
              Mohammed Adamu Ramadan<br />
              Lotto Kiosk, off Aviation Rd Adentan<br />
              Greater Accra Region - Ghana.
            </div>
          </div>
          <div className="flex justify-center items-start gap-8">
            <HiOutlineLocationMarker />
            <p className="text-sm">
              <span className="uppercase font-bold">Location: </span>Adentan
            </p>
          </div>
          <div className="flex justify-center items-start gap-8">
            <FaPhone />
            <div className="text-sm">
              <span className="uppercase font-bold">Phone: </span>
              <a href='tel:+233245812888'>+233 245 812 888</a><br /><br />

              <a href='tel:+233544899754'>+233 544 899 754</a>
            </div>
          </div>
          <div className="flex justify-center items-start gap-8">
            <FaEnvelope />
            <div className="text-sm">
              <span className="uppercase font-bold">Email:</span>
              <a href="mailto:ramadan5555@hotmail.com"> ramadan5555@hotmail.com</a>
            </div>
          </div>
        </div>

      </article>
      <article>

        <div>
          <h4 className="text-2xl uppercase mb-1 font-bold">get in touch</h4>
          <div className="w-20 h-2 bg-secondary" />
        </div>
      </article>
    </section>
  )
}

