import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Timer from '../../assets/images/timer.png';
import styles from "./deal.module.css";

const Pending = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); 

  const handleDeal = () => {
    navigate("/buyer/pending/received-confirmation");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className={styles.Setup}>
      <h4>Seller Approval Pending</h4>
      {/* Rotate image during loading */}
      <img
        src={Timer}
        alt="Loading Timer"
        className={isLoading ? styles.rotateImage : ""}
      />
      {/* Show button only after loading is complete */}
      {!isLoading && (
        <button className={styles.greenBtn} onClick={handleDeal}>
          Received Confirmation
        </button>
      )}
    </div>
  );
};

export default Pending;
