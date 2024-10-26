import styles from "./seller.module.css";
import RedHand from '../../assets/images/reject.png'
const Reject = () => {
  return (
    <div className={styles.Setup}>
        <h4>Deal Rejected !</h4>
        <img src={RedHand} alt="" />
        <input type="text" placeholder="Search counterparty ..." value="Txn ID: FBLBG12345"/>
    </div>
  )
}

export default Reject ;