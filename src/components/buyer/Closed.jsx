// import { useNavigate } from "react-router-dom";
import Close from "../../assets/images/close.png";
// import Check from "../../assets/images/check.png";
import styles from "./deal.module.css";
import { useState } from "react";
import ModalClose from '../../assets/images/modal-close.png'
import Modal from 'react-modal';
import DisputeResolution from "./DisputeResolution";

const Closed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    // const navigate = useNavigate();

    // const handleDeal = () => {
    //   navigate("/seller/pending/dispute-resolution");
    // }
    const handleDeal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div>
      <div className={styles.imgGroup}>
        <img src={Close} alt="" />
        {/* <img src={Check} alt="" /> */}
      </div>
      <button className={styles.closeBtn}  onClick={handleDeal}>Raise Dispute</button>
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
        <DisputeResolution />
      </Modal>
    </div>
  );
};

export default Closed;
