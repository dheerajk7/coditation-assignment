import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
function Navbar(props) {
  return (
    <div className="navbar-container">
      <Link to="/">My GitHub</Link>
    </div>
  );
}

export default Navbar;
