import styles from "./deal.module.css";
import Horse from "../../assets/images/fly.png";
import Email from "../../assets/images/email.png";
import user from "../../assets/images/user.png";
import Setting from "../../assets/images/settings.png";
import Bot from "../../assets/images/bot.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

const Buyer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const handleLogout = () => {
    // Clear user session data here, e.g., localStorage.clear();
    localStorage.clear(); // Example: Clear all local storage items

    // Redirect to login page
    navigate("/"); // Update this route based on your app's routing
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
          {/* <h4>Hi Ali</h4> */}
          <h4>Hi Buyer</h4>
          <div className={styles.mobile}>
            <Outlet />
          </div>
          <div className={styles.btnGroup}>
            <NavLink
              // to="#"
              //to="Live"
              to="pending"
              // className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Live
            </NavLink>
            <NavLink
              to="pending"
              // className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Pending
            </NavLink>
            <NavLink
              to="closed"
              // className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Closed
            </NavLink>
          </div>

          <div className={styles.deal}>
            <Outlet />
          </div>

          <div className={styles.iconNavigation}>
            <a href="#" title="Email">
              <img src={Email} alt="" />
            </a>
            <a href="#" title="User">
              <img src={user} alt="" />
            </a>
            <a href="#" title="Bot">
              {" "}
              <img src={Bot} alt="" />
            </a>
            <a href="#" title="Setting" onClick={toggleDropdown}>
              {" "}
              <img src={Setting} alt="" />
            </a>
            {isOpen && (
            <div className={styles.dropdownMenu}>
              <ul>
                <li>
                  <p onClick={handleLogout}>Logout</p>
                </li>
              </ul>
            </div>
          )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Buyer;
