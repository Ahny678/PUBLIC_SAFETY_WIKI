import styles from "./Feature.module.css";
function Feature({ image = "def.png", name = "def", desc = "desc" }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}
export default Feature;
