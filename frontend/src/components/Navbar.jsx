import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav>
      <button onClick={logout}>Logout</button>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;
