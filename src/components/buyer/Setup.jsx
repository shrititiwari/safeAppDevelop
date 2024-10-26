import styles from "./deal.module.css";
import User from '../../assets/images/user.png'
const Setup = () => {
  return (
    <div className={styles.Setup}>
        <h4>Deal Set Up</h4>
        <img src={User} alt="" />
        <input type="text" placeholder="Search counterparty ..." />
    </div>
  )
}

export default Setup