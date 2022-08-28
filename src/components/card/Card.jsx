import "./Card.css";

function Card({ item, onClick }) {
    return (
        <div className='Card__container' onClick={onClick}>
            <img src={item.image} alt={item.title} className='Card__Image' />
            <p>{item.name}</p>
            <p>R$: {item.price}</p>
        </div>
    );
}
export default Card;
