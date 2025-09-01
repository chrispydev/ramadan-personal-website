const Footer = () => {
  return (
    <section className="mt-10 ">
      <article className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 px-8">
        <div className="space-y-8">
          <h5 className="font-black uppercase">Socal Media</h5>
          <ul className="text-sm space-y-4">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>WhatsApp</li>
          </ul>
        </div>
        <div className="space-y-8">
          <h5 className="font-black uppercase">Quick Links</h5>
          <ul className="text-sm space-y-4">
            <li>Meet Ramadam</li>
            <li>Initiative</li>
            <li>Events</li>
            <li>News</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="space-y-8">
          <h5 className="font-black uppercase">About Us </h5>
          <ul className="text-sm space-y-4">
            <li>Our Team</li>
            <li>Our Projects</li>
            <li>Privary Policy</li>
            <li>Terms and Conditions</li>
            <li>Contat Us</li>
          </ul>
        </div>
        <div className="space-y-8">
          <h5 className="font-black uppercase">News Letter</h5>
          <form className="flex flex-col justify-center items-center space-y-8">
            <input id="email" name="email" type="email" className="bg-white py-3 px-4 text-gray-900 w-full focus:outline-0 shadow" placeholder="Youremail@volunteer.com" />
            <button className="bg-secondary py-3 px-4 text-white  tracking-wide font-extralight w-full">SUBMIT</button>
          </form>
        </div>
      </article>
      <div className="h-[1px] flex justify-center items-center mx-8 my-5 w-[95%] bg-black" />
      <p className="text-center text-sm my-5">2025 © Dorcas Affo Toffey | All Rights Reserved</p>
    </section>
  )
}

export default Footer
