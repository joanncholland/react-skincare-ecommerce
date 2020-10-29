import React, { Component } from "react";
import Product from "./Product.js";
import Title from "./Title.js";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      // <Product />
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
