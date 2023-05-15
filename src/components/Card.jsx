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
    <div>
      <button onClick={() => alert("Emulamos que se cierra la card")}>X</button>
      <h2>{name}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt="foto-personaje" />
    </div>
  );
}
