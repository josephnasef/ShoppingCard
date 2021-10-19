import React, { Component } from 'react';
import qs from "query-string";
class ProductDetails extends Component {
    handelsave = () => {
        this.props.history.replace('/cart');
        console.log('save');
    };
    render() { 
       

  const res = qs.parse(this.props.location.search);
  console.log(res);
  const MyProduct = this.props.products.filter(
    (p) => p.id === parseInt(this.props.match.params.id)
  )[0];

  return (
    <React.Fragment>
      <h1>Details no.{this.props.match.params.id}</h1>
      <h1>
        {" "}
        <strong> name : </strong> {MyProduct.name}{" "}
      </h1>
      <h1>
        {" "}
        <strong> Count in Shoping Cart : </strong> {MyProduct.count}{" "}
      </h1>
      <button onClick={this.handelsave} className="btn btn-primary btn-small">save</button>
    </React.Fragment>
  );
    }
}
 
// export default ProductDetails;
// const ProductDetails = (props) => {};

export default ProductDetails;
