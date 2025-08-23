import Link from 'next/link';
import { NextPage } from 'next';

interface NavLinkProps {
  href: string;
  linkName: string;
}

const NavLink: NextPage<NavLinkProps> = ({ href, linkName }) => {

  return (
    <div>
      <Link href={href} className="uppercase hover:text-primary hover:font-black ">
        {linkName}
      </Link>
    </div>
  )
}

export default NavLink
