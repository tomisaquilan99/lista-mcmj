import { useState, useEffect } from "react";
import { Product } from "./Product";
import "./ProductList.css";

export function ProductList() {
  const [allProducts, setAllProducts] = useState([]);

  function getProducts() {
    const products = require("../productos.json");
    setAllProducts(products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>Productos de la semana</h2>
      <div className="products-list">
        {allProducts.map((element) => {
          return (
            <Product
              key={element.id}
              price={element.precio}
              name={element.nombre}
              quantity={element.cantidad}
              id={element.id}
              img={element.img}
            />
          );
        })}
      </div>
    </div>
  );
}
