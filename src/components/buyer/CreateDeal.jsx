import styles from "./deal.module.css";
import Hand from '../../assets/images/stakeholder.png';
import { useNavigate } from "react-router-dom";

const CreateDeal = () => {
  const navigate = useNavigate();

  const handleDeal = () => {
    navigate("transaction");
  }
  return (
    <div className={styles.createDeal}>
      <img src={Hand} alt="" />
      <button onClick={handleDeal}>Create Deal</button>
    </div>
  );
};

export default CreateDeal;
