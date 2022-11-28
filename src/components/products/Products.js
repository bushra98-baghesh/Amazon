import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "../slider/Slider.css";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
function Products() {
  const [parent] = useAutoAnimate();
  const [MenuProduct, setMenuProduct] = useState(ProductsData);
  const filter = (type) => {
    setMenuProduct(ProductsData.filter((product) => product.type === type));
  };
  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Featured Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProduct(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioner</li>
          <li onClick={() => filter("foundation")}>Foundation</li>
        </ul>
        <div className={css.list} ref={parent}>
          {MenuProduct.map((product, i) => (
            <div className={css.product}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div>Show Now</div>
              </div>
              <img src={product.img} alt="" className="product_img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
