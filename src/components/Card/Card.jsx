import styles from "../card/Card.module.css";

/* Acá estamos haciendo un destructuring para luego usar directamente los parámetros, sino hay que accederlo como obj */
export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.redCrossContainer}>
        {/* En este caso, no alcanza con enviar el onClose handler porque 
        que necesitamos que llame a su definición y no que se invoque la función. */}
        <button className={styles.redCross} onClick={() => onClose(id)}>
          X
        </button>
      </div>
      <div className={styles.box}>
        <img className={styles.characterImg} src={image} alt="foto-personaje" />
      </div>
      <div className={styles.characterInfo}>
        <h2>{name}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
      </div>
    </article>
  );
}
