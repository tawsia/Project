import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/LoginForm">Login</Link>
        </li>
        <li>
          <Link to="/RegistrationForm">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
