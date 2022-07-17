import { ProductList } from "./ProductList";
import "./MainPage.css";

export function MainPage() {
  return (
    <div className="container-page">
      <h1>Lista MCMJ Fecha: 21/07/2022</h1>
      <p>
        Amigxs del Mas Cerca es Mas Justo, les dejamos a continuación los
        productos que estarán disponibles esta semana
      </p>
      <ProductList />
    </div>
  );
}
