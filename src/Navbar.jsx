import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar">
      <FaReact />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#0077B6',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;