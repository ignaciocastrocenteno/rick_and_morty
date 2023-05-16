import styles from "../Card/Card.module.css";

/* Acá estamos haciendo un destructuring para luego usar directamente los parámetros, sino hay que accederlo como obj */
export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
}) {
  return (
    <article className={styles.card}>
      <div>
        <button
          className={styles.redCross}
          onClick={() => alert("Emulamos que se cierra la card")}
        >
          X
        </button>
      </div>
      <img className={styles.characterImg} src={image} alt="foto-personaje" />
      <div className={styles.characterInfo}>
        <h2>{name}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
      </div>
    </article>
  );
}
