import Link from 'next/link';

interface NavLinkProps {
  href: string;
  linkName: string;
}

const NavLink = ({ href, linkName }: NavLinkProps) => {

  return (
    <div>
      <Link href={href} className="uppercase hover:text-primary hover:font-black ">
        {linkName}
      </Link>
    </div>
  )
}

export default NavLink
