import "./Product.css";

export function Product({ name, price, quantity, img }) {
  return (
    <div className="uniqueProduct">
      <img src={img} alt="algo"></img>
      <div className="container-description-text">
        <span className="description-text-1">{name}</span>
        <span className="description-text-2">{price}</span>
        <span className="description-text-3">{quantity}</span>
      </div>
    </div>
  );
}
