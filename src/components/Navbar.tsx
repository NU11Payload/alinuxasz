import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="terminal-window mb-8">
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="hover:text-green-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-green-400 transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-green-400 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
