import styles from "./ImageGrid.module.css";
function ImageGrid({ horseman }) {
  return (
    <div>
      <div className={styles.info}>
        <p>{horseman.title}</p>
        <p>Alias: {horseman.name}</p>
        <p>Attack: {horseman.modeOfAttack}</p>
        <p>Temparemnt: {horseman.temperament}</p>
        <p>Apperance: {horseman.appearance}</p>
        <p>Philosophy: {horseman.philosophy}</p>
        <p>Danger: {horseman.dangerLevel}</p>
      </div>
      <div className={styles.grid}>
        {horseman.image.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${horseman.name}-${i}`}
            className={`${styles.item} ${styles[`item${i + 1}`]}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
