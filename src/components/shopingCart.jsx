import React, { Component } from "react";
import Product from "./product";


class ShopingCart extends Component {

  render() {
    const {products,onDelete,onIncrement,onReset}=this.props;
    return (
      <React.Fragment>
        <h1> Shopping cart</h1>
       <button onClick={onReset} className="btn btn-info m-2"> Reset</button>
        {products.map((product) => (
         
         <Product
            key={product.id}
            Delete={onDelete}
            Increment ={onIncrement}
            product={product}
          />
          
        ))}
      </React.Fragment>
    );
  }
}

export default ShopingCart;
