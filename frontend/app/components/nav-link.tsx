import Link from 'next/link';
import { FC } from 'react'

interface NavLinkProps {
  href: string;
  linkName: string;
}

const NavLink: FC<NavLinkProps> = ({ href, linkName }) => {

  return (
    <div>
      <Link scroll={false} href={href} className="font-light text-sm uppercase hover:text-primary hover:font-black ">
        {linkName}
      </Link>
    </div>
  )
}

export default NavLink
