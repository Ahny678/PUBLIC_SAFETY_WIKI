import styles from "./footer.module.css";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <>
      <>
        <hr />
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <p>
              {" "}
              @2025 JVision. Any sightings of unnatural occurences? Interested
              in protecting humanking? Contact us{" "}
            </p>
          </div>
          <div className={styles.footerRight}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className={styles.icon} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className={styles.icon} />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle className={styles.icon} />
            </a>
          </div>
        </div>
      </>
    </>
  );
}
export default Footer;
