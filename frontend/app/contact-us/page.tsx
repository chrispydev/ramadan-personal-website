'use client'
import { FaRegPaperPlane } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { useState, HTMLInputTypeAttribute } from 'react'
import axios from "axios";

export default function ContactUs() {

  const [fullName, setFullName] = useState<HTMLInputTypeAttribute>();
  const [phoneNumber, setPhoneNumber] = useState<HTMLInputTypeAttribute>();
  const [email, setEmail] = useState<HTMLInputTypeAttribute>();
  const [subject, setSubject] = useState<HTMLInputTypeAttribute>();
  const [message, setMessage] = useState<HTMLInputTypeAttribute>();

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: false },
  });

  const handleOnSubmiting = (code: number) => {
    if (code == 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: true },
      });
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
      setSubject('');
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: false },
        });
      }, 2000);
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: false },
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: false },
    });

    const body = { 'Subject': subject, 'PhoneNumber': phoneNumber, 'message': message }

    axios
      .post(process.env.NEXT_PUBLIC_FORMSPREE_URL, {
        data: { fullName: fullName, email: email, message: body },
      })
      .then((_response) => {
        handleOnSubmiting(_response.status);
      });
  };


  return (
    <section className="pt-10 w-[90%] mx-auto grid grid-cols-2">
      {status.info.error && (
        <div
          className='bg-red-100 border border-red-400 text-secondary px-4 py-3 rounded relative'
          role='alert'
        >
          <strong className='font-bold'>Error</strong>:
          <span className='block sm:inline'>Message not sent????</span>
        </div>
      )}

      {status.info.msg && (
        <div
          className='bg-red-100 border border-dColor text-dColor px-4 py-3 rounded relative'
          role='alert'
        >
          <span className='block sm:inline'>Message sent 👍</span>
        </div>
      )}
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
        <form className="my-8 flex flex-col gap-4">
          <div className="space-x-8 grid md:grid-cols-2 grid-cols-1 gap-4">
            <input type="text" placeholder="Full Name" className="py-2 px-4 w-full outline-secondary border-1 border-grayText" onChange={(e) => setFullName(e.target.value)} value={fullName} />            <input type="tel" placeholder="Phone Number" className="py-2 w-full px-4 outline-secondary border-1 border-grayText" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
          </div>
          <div>
            <input type="emal" placeholder="Email Address" className="w-full py-2 px-4 outline-secondary border-1 border-grayText" onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div>
            <input type="text" placeholder="Subject" className="w-full py-2 px-4 outline-secondary border-1 border-grayText" onChange={(e) => setSubject(e.target.value)} value={subject} />
          </div>
          <div>
            <textarea placeholder="Leave us a message..." rows={5} cols={20} className="w-full py-2 px-4 outline-secondary border-1 border-grayText"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <button type='submit' className='bg-secondary py-2 px-4 my-2 text-white uppercase cursor-pointer' onClick={(e) => handleSubmit(e)} >{!status.submitting ? !status.submitted ? 'Submit message' : 'Submitted' : 'Submitting...'}
          </button>
        </form>
      </article>
    </section>
  )
}

