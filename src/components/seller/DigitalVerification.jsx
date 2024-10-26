import styles from "./seller.module.css";
import { useState } from 'react';

const DigitalVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [digitalID, setDigitalID] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    if (!isConfirmed) {
      alert("Please confirm your identification.");
      return;
    }

    setIsLoading(true);
    setDigitalID(''); // Clear previous result

    // Simulate processing time
    setTimeout(() => {
      setIsLoading(false);

      // Generate a random digital ID number
      const newDigitalID = `#ID${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
      setDigitalID(newDigitalID);
    }, 3000); // Adjust time as needed
  };

  return (
    <div className={styles.digital}>
      <h4>Digital Verification</h4>
      {digitalID && (
        <div id="results">
          <h5 className={styles.IdCardResult}>Your Digi ID is <strong>{digitalID}</strong></h5>
        </div>
      )}
      <label htmlFor="idProof">Identification ID Proof:</label>
      <input type="file" id="idProof" accept="image/*" required />

      <label>
        <input 
          type="checkbox" 
          className={styles.digitalCheckbox} 
          id="confirmationCheckbox" 
          checked={isConfirmed} 
          onChange={(e) => setIsConfirmed(e.target.checked)} 
          required 
        />
        I confirm my identification.
      </label>

      <button onClick={handleConfirm} disabled={isLoading}>
        Submit
      </button>

      {/* Show loading message */}
      {isLoading && <div id="loading">Processing...</div>}

      {/* Show result message */}
      
    </div>
  );
};

export default DigitalVerification;
