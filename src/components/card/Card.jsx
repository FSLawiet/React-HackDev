import "./Card.css";

function Card({ item, onClick }) {
  return (
    <div className="Card__container" onClick={onClick}>
      <img
        src={"data:image/png;base64," + item.img}
        alt={item.peca}
        className="Card__Image"
      />
      <p>{item.peca}</p>
      <p>R$: {item.valor}</p>
    </div>
  );
}
export default Card;
