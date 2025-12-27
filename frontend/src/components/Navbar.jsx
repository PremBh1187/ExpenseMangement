import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;
