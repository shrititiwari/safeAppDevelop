import { useState } from "react";
import styles from "./login.module.css";
import Horse from "../../assets/images/fly.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("email", email);
    console.log("password", password);

    // Buyer login check
    if (email === "buyer@gmail.com" && password === "123456") {
      navigate("/buyer/pending");
      // navigate("/seller/pending");
      toast.success("Login successful as Buyer");
    } 
    // Seller login check
    else if (email === "seller@gmail.com" && password === "123456") {
      // navigate("/buyer/pending");
      navigate("/seller/pending");
      toast.success("Login successful as Seller");
    }
    // Invalid credentials
    else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.heading}>
            <h2>
              Safe Settlement
              <span>Powered by LBG</span>
            </h2>
            <img src={Horse} alt="" />
          </div>
          <input
            type="text"
            placeholder="User Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.login} onClick={handleLogin}>
            Login
          </button>
          <button className={styles.register}>Register</button>
          <p>Forgot Password</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
