import "./Product.css";

export function Product({ name, price, quantity, img }) {
  return (
    <div className="uniqueProduct">
      <img src={img} alt="algo"></img>
      <span>{name}</span>
      <span>{price}</span>
      <span>{quantity}</span>
    </div>
  );
}
