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
            id="1"
            name="Microsoft Xbox Series X"
            rating={5}
            price="499.99"
            image="https://inetimg2.se/img/688x386/6335950_4.jpg"
          />
          <Product
            id="2"
            name="Gigabyte RTX 3080"
            rating={4}
            price="699.99"
            image="https://www.netonnet.se/GetFile/ProductImagePrimary/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3080-gaming-oc-10g(1014380)_396632_1_Normal_Large.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            name="Sony Playstation 5"
            rating={5}
            price="499.99"
            image="https://inetimg3.se/img/688x386/6609649_5.jpg"
          />
          <Product
            id="4"
            name="AMD Ryzen 9 3900X 3.8 GHz 70MB"
            rating={5}
            price="399.99"
            image="https://inetimg3.se/img/688x386/5301789_0.jpg"
          />
          <Product
            id="4"
            name="Corsair 16GB (2x8GB) DDR4 3200Mhz CL16 Vengeance LPX Black"
            rating={4}
            price="59.99"
            image="https://inetimg3.se/img/688x386/6110169_0.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            name="ASUS 32 ProArt PA32UCX-K IPS 4K"
            rating={5}
            price="3500.90"
            image="https://inetimg3.se/img/688x386/2216037_0.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
