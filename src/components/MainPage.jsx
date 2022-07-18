import { ProductList } from "./ProductList";
import "./MainPage.css";

export function MainPage() {
  return (
    <div className="container-page">
      <div className="title-text">
        <h1>Lista MCMJ</h1>
        <span className="date-text">Fecha: 18/07/2022</span>
      </div>
      <p className="product-list-text">
        Amigxs del Mas Cerca es Mas Justo, les dejamos a continuación los
        productos que estarán disponibles esta semana.
      </p>
      <p>
        Para asegurarnos la provision de todos los pedidos, podran hacer su
        pedido hasta los dias jueves a las 14HS
      </p>
      <p>
        Pueden realizar su pedido a traves de{" "}
        <a
          href="https://amba.mascercaesmasjusto.org.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.mascercaesmasjusto.org.ar
        </a>
      </p>
      <ProductList />
    </div>
  );
}
