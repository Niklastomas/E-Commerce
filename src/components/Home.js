import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          alt="product"
          className="home__image"
          src="https://images.unsplash.com/photo-1599370816632-28f943f2c306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        ></img>
        <div className="home__row">
          <Product
            name="Gigabyte RTX 3080"
            rating={5}
            price="599.99"
            image="https://www.netonnet.se/GetFile/ProductImagePrimary/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3080-gaming-oc-10g(1014380)_396632_1_Normal_Large.jpg"
          />
          <Product
            name="Gigabyte RTX 3080"
            rating={5}
            price="599.99"
            image="https://www.netonnet.se/GetFile/ProductImagePrimary/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3080-gaming-oc-10g(1014380)_396632_1_Normal_Large.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            name="Gigabyte RTX 3080"
            rating={5}
            price="599.99"
            image="https://www.netonnet.se/GetFile/ProductImagePrimary/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3080-gaming-oc-10g(1014380)_396632_1_Normal_Large.jpg"
          />
          <Product
            name="Gigabyte RTX 3080"
            rating={5}
            price="599.99"
            image="https://www.netonnet.se/GetFile/ProductImagePrimary/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3080-gaming-oc-10g(1014380)_396632_1_Normal_Large.jpg"
          />
          <Product
            name="Gigabyte RTX 3080"
            rating={5}
            price="599.99"
            image="https://www.netonnet.se/GetFile/ProductImagePrimary/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3080-gaming-oc-10g(1014380)_396632_1_Normal_Large.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            name="Gigabyte RTX 3080"
            rating={5}
            price="599.99"
            image="https://www.netonnet.se/GetFile/ProductImagePrimary/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3080-gaming-oc-10g(1014380)_396632_1_Normal_Large.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
