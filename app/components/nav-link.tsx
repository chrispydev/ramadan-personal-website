import Link from 'next/link';
import { FC } from 'react'

interface NavLinkProps {
  href: string;
  linkName: string;
}

const NavLink: FC<NavLinkProps> = ({ href, linkName }) => {

  return (
    <div>
      <Link href={href} className="uppercase hover:text-primary hover:font-black ">
        {linkName}
      </Link>
    </div>
  )
}

export default NavLink
