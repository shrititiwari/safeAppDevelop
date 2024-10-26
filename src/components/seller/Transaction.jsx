import { useNavigate } from "react-router-dom";
import styles from "./seller.module.css";
import { useState } from "react";
import ModalClose from '../../assets/images/modal-close.png'
import Modal from 'react-modal';
import DigitalVerification from "./DigitalVerification";

const Transaction = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAccept = () => {
    navigate("/seller/pending/Deal-Confirmed");
  }
  const handleReject = () => {
    navigate("/seller/pending/reject");
  }
  // const handleLink = () => {
  //   navigate("/seller/pending/digital-verification");
  // }
  const handleLink = () => {
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
        <button className={styles.grayBtn} onClick={handleLink}>Link Smart ID</button>
        <div className={styles.BtnGroup}>
        <button className={styles.greenBtn} onClick={handleAccept}>Accept</button>
        <button className={styles.rejectBtn} onClick={handleReject}>Reject</button>
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
    </div>
  )
}

export default Transaction