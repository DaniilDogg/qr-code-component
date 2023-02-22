import qrCode from "./images/image-qr-code.png";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.card}>
        <img src={qrCode} className={styles.qrCode} alt="QR code" />
          <h1 className={styles.title}>
            Improve your front-end skills by building projects
          </h1>
          <p className={styles.text}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
      </header>
    </div>
  );
}

export default App;
