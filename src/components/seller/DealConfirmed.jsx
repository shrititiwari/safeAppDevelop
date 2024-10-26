import styles from "./seller.module.css";
import GreenHand from '../../assets/images/green-stakeholder.png'
const DealConfirmed = () => {
  return (
    <div className={styles.Setup}>
        <h4>Deal Agreed !</h4>
        <img src={GreenHand} alt="" />
        <input type="text" placeholder="Search counterparty ..." value="Txn ID: FBLBG12345"/>
    </div>
  )
}

export default DealConfirmed ;