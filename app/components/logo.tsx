import Link from "next/link"

const Logo = () => {
  return (
    <div>
      <Link href='/'>
        <div className="text-center uppercase border py-1 px-1.5">Office of <br /> Honourable <br />Mohammed Adamu Ramadan</div>
      </Link>
    </div>
  )
}

export default Logo
