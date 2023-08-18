import './Card.css';

function Card({ id, pictures, title, price }) {
  const img = <img src={pictures} alt={title} />;
  return (
    <div className="burger" id={id}>
      <h1 className="burger-title"> {title}</h1>
      <div className="image">
        {img}
        <p className="priceBurger">{price}</p>
      </div>
    </div>
  );
}

export default Card;
