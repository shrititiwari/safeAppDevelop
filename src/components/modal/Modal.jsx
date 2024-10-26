import styles from './modal.module.css'; // Create a CSS module for styling

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
