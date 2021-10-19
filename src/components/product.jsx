import React, { Component } from "react";

import { Link } from 'react-router-dom';


class Product extends Component {
  // state = {
  //     name :this.props.product.name ,
  //     count : this.props.product.count
  // }

  getclases() {
    const classname =
      this.props.product.count === 0
        ? "badge badge-warning m-2"
        : "badge badge-primary m-2";
    return classname;
  }

  render() {
    console.log(this.props);

    return (
      <div className="row">
        <div className="col-2">
          <span className="m-3">
            <Link to={`/products/${this.props.product.id}`}>{this.props.product.name}</Link>{" "}
          </span>
        </div>

        <span className={this.getclases()}> {this.props.product.count} </span>
        <button
          onClick={() => this.props.Increment(this.props.product)}
          className="btn btn-primary m-2"
        >
          {" "}
          +{" "}
        </button>
        <span style={{cursor:'pointer'}} onClick={() => this.props.Delete(this.props.product)}>
          <i pointer className="fas fa-trash m-3"></i>
        </span>
      </div>
    );
  }
}

export default Product;
