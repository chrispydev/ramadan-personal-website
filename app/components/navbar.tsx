import Logo from './logo';
import NavLink from './nav-link';

const header = () => {
  return (
    <header className="flex justify-center items-center space-x-4 shadow-md p-4">
      <Logo />
      <ul className="flex justify-center items-center space-x-4">
        <li>
          <NavLink href="/" linkName="Meet Ramadan" />
        </li>
        <li>
          <NavLink href="/" linkName="Initiative" />
        </li>
        <li>
          <NavLink href="/" linkName="Events" />
        </li>
        <li>
          <NavLink href="/" linkName="News" />
        </li>
        <NavLink href="/" linkName="Contact Us" />
      </ul>
    </header>
  )
}

export default header

