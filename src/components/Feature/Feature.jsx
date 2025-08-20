import styles from "./Feature.module.css";
function Feature({ image = "def.png", name = "def", desc = "desc" }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <div className={styles.image}>
            <img src={image} alt={name} />
          </div>
        </div>
        <div className={styles.info}>
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}
export default Feature;
