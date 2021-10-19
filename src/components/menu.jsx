import React from "react";
import ProductMenu from "./productMenu";

const Menu = (props) => {
  return (
    <React.Fragment>
      <h1>menu</h1>

      <table className="table border table-hover">
        <thead>
          <tr className="thead-dark">
            <th scope="col">Name</th>
            <th scope="col">Price </th>
            <th scope="col">Action </th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <ProductMenu key={product.id} addtocard ={props.addTo} product={product} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Menu;
