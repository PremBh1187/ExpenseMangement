import {useEffect} from "react";
import { Link } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);
  return (
    <div style={styles.container}>
      <h1>Expense Manager</h1>
      <p>Manage your daily expenses easily</p>

      <div style={styles.buttons}>
        <Link to="/login">
          <button style={styles.btn}>Login</button>
        </Link>

        <Link to="/register">
          <button style={styles.btn}>Register</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    gap: "20px",
  },
  btn: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Home;
