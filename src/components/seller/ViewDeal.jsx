import styles from "./seller.module.css";
import Hand from "../../assets/images/stakeholder.png";
import { useNavigate } from "react-router-dom";

const ViewDeal = () => {
  const navigate = useNavigate();

  const handleDeal = () => {
    navigate("transaction");
  };
  return (
    <div className={styles.createDeal}>
      <img src={Hand} alt="" />
      <button onClick={handleDeal}>View Deal</button>
    </div>
  );
};

export default ViewDeal;
