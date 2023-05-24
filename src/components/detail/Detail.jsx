import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styles from "../detail/Detail.module.css";

export default function Detail() {
  const {id} = useParams();
  // console.log(id);
  const [character, setCharacter] = useState({});
  console.log(character);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.cardDetail}>
      {character.name ? (
        <div className={styles.cardDetailContainer}>
          <div className={styles.cardDetailBackground}>
            <h1>Information about the character</h1>
            <ul>
              <li>{`STATUS - ${character.status}`}</li>
              <li>{`GENDER - ${character.gender}`}</li>
              <li>{`SPECIES - ${character.species}`}</li>
              {/* 'Interrogation wildcard' whether there's a value inside the inner object. */}
              <li>{`ORIGIN - ${character.origin?.name}`}</li>
            </ul>
          </div>
          <div className={styles.cardImageBackground}>
            <img
              src={character.image}
              alt="character"
              className={styles.cardImage}
            />
          </div>
        </div>
      ) : (
        <div>LA API NO CARGA PORQUE ES MALARDA</div>
      )}
    </div>
  );
}
