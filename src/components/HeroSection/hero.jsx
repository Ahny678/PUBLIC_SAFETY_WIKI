import styles from "./hero.module.css";
function Hero({ image = "def.jpg", title = "def", desc = "desc" }) {
  return (
    <>
      <div
        className={styles.heroSection}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.textContent}>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}

export default Hero;

// Import an image from /assets/images/homepage
// Add overlay text (title + intro info)
