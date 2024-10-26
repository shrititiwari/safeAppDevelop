import { useState } from 'react';
import styles from "./deal.module.css";

const DisputeResolution = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const handleCompare = () => {
    setIsLoading(true);
    setResultMessage(''); // Clear previous result

    // Simulate a 5-second loading time
    setTimeout(() => {
      setIsLoading(false);
      setResultMessage("This dispute is resolved in Buyer's favor. RLN will release the blocked token amount.");
    }, 5000);
  };

  return (
    <div className={styles.dispute}>
      <h4>Dispute Resolution</h4>
      
      <label htmlFor="image1">Disputed Image:</label>
      <input type="file" id="image1" accept="image/*" required />

      <label htmlFor="image2">Original Image:</label>
      <input type="file" id="image2" accept="image/*" required />

      <button onClick={handleCompare} disabled={isLoading}>
      Dispute Resolution Using AI
      </button>

      {isLoading && <div id="loading">AI is calculating ...</div>}

      {resultMessage && <div id="results"><p>{resultMessage}</p></div>}
    </div>
  );
};

export default DisputeResolution;
