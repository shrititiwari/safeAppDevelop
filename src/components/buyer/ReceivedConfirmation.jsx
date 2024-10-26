import Cash from '../../assets/images/cash.png'
import styles from "./deal.module.css";

const ReceivedConfirmation = () => {
  return (
    <div className={styles.Setup}>
        <h4>Tnx ID: FBLBG12345</h4>
        <img src={Cash} alt="" />
        <button className={styles.greenBtn}>Token Is Released By RLN</button>
    </div>
  )
}

export default ReceivedConfirmation ;