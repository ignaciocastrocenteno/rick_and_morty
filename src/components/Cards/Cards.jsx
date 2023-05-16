import Card from "../card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards({characters}) {
  return (
    <section className={styles.contentWrapper}>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
          />
        );
      })}
    </section>
  );
}
