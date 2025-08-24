import Link from "next/link"

const Logo = () => {
  return (
    <div>
      <Link href='/'>
        <div className="text-center text-xs lg:text-base uppercase border py-0.5 lg:py-1 px-0.5 lg:px-1.5">Office of <br /> Honourable <br />Mohammed Adamu <br /> Ramadan</div>
      </Link>
    </div>
  )
}

export default Logo
