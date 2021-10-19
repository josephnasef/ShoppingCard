import React, { Component } from "react";
class ProductMenu extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <tr key={this.props.key}>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
        <td>
         
          <i
            style={{
              color:
                this.props.product.InShopping === true ? "Dodgerblue" : " ",
            }}
            onClick={() => this.props.addtocard(this.props.product)}
            className="fas fa-cart-plus"
          ></i>{" "}
        </td>
      </tr>
    );
  }
}

export default ProductMenu;
