import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="nav-bar">
    <h1 className="logo">Math Magicians</h1>
    <ul className="nav-items">
      <li><Link className="line" to="/">Home</Link></li>
      <li><Link className="line" to="/calculator">Calculator</Link></li>
      <li><Link to="/quotes">Quotes</Link></li>
    </ul>
  </nav>
);
export default Navigation;
