import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/dashboard");
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>💰 Expense Manager</h1>
      <p>Track your daily & monthly expenses easily</p>

      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
}

export default Home;
