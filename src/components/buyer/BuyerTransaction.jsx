import { useNavigate } from "react-router-dom";
import styles from "./deal.module.css";
import ModalClose from '../../assets/images/modal-close.png'
import { useState } from "react";
import Modal from 'react-modal';
import DigitalVerification from "../seller/DigitalVerification";

const BuyerTransaction = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    navigate("/buyer/pending/seller-pending");
  }
  // const handleDigital = () => {
  //   navigate("/buyer/pending/digital-verification");
  // }
  const handleDigital = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.live}>
        <div className={styles.inputForm}>
            <button>Item</button>
            <input type="text" placeholder="Cannondale Sika" value="Cannondale Sika"/>
            <button>Price</button>
            <input type="text" placeholder="£500" value="£500"/>
            <button>deposit</button>
            <input type="text" placeholder="£50" value="£50"/>
            <button>Date</button>
            <input type="text" placeholder="22/10/2024" value="22/10/2024"/>
            <button>Location</button>
            <input type="text" placeholder="25 Greshom St" value="25 Greshom St"/>
        </div>
        <button className={styles.greenBtn} onClick={handleDigital}>Link Smart ID</button>
        <button onClick={handleClick}>Submit</button>
        <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Link Smart ID Modal"
        className={styles.modalContent} 
        overlayClassName={styles.modalOverlay} 
      >
        <div className={styles.closeDiv} >
          <img src={ModalClose} alt="" onClick={closeModal} className={styles.closeButton}/>
        </div>
        <DigitalVerification />
      </Modal>
    </div>
  )
}

export default BuyerTransaction