import Card from "../card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards({characters, onClose}) {
  return (
    <section className={styles.contentWrapper}>
      {characters.map((character) => {
        return (
          <Card
            /* Acá no es necesario usar una key para identificar cada <Card /> porque
            alcanza con el ID que vamos a enviarle por props. */
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            /* Sacado del componente Card.jsx porque no es 'dry code'.
              Si los eventos fuesen diferentes ahí si justifica el cambio. */
            onClose={onClose}
          />
        );
      })}
    </section>
  );
}
