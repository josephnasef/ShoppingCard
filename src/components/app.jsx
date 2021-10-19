import React, { Component } from "react";
import ShopingCart from "./shopingCart";
import NavBar from "./navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Contact from "./contact";
import ProductDetails from "./productDetails";
import NotFound from "./NotFound";
import Menu from "./menu";
import Login from './login';
import axios from 'axios';

class App extends Component {
  state = {
    products: [
      { id: 1, name: "coca", count: 0 ,price : 6 , InShopping:false},
      { id: 2, name: "pepsi", count: 0 ,price : 10,InShopping:false},
      { id: 3, name: "merenda", count: 0,price : 7,InShopping:false },
      { id: 4, name: "7up", count: 0 ,price : 8,InShopping:false},
    ],
  };
  async componentDidMount(){
   const {data} =  await axios.get("https://jsonplaceholder.typicode.com/posts")
   console.log(data);
  }
  DeleteHandeler = (product) => {
    const newProducts = this.state.products.filter((p) => p.id !== product.id);
    this.setState({ products: newProducts });
    // console.log("hi");
  };
  resetHandeler = () => {
    let products = [...this.state.products];
    products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products });
  };
  IncrementOffCount = (product) => {
    //console.log(product);
    //clon
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //edit
    products[index].count++;
    //set state
    this.setState({ products });
  };
  addToCard=(product)=>{
     const Products = [...this.state.products];
     const ProductId = Products.indexOf(product);
     //Products[ProductId].InShopping==false ? true :false;
     if (Products[ProductId].InShopping===true) {
      Products[ProductId].InShopping=false;
     }
     else{
      Products[ProductId].InShopping=true;
     }
    
    this.setState(Products)
    // console.log();
  }
  render() {
    return (
      <React.Fragment>
        <NavBar
          productCount={this.state.products.filter((p) => p.count > 0 && p.InShopping!==false).length}
        />
        <main className="container">
          <Switch>
            <Route path="/notfound" component={NotFound} />
            <Route
              path="/products/:id"
              component={(props) => (
                <ProductDetails products={this.state.products} {...props} />
              )}
            />

            <Route
              path="/cart"
              render={(props) => (
                <ShopingCart
                  products={this.state.products.filter(p=>p.InShopping!==false)}
                  onDelete={this.addToCard}
                  onReset={this.resetHandeler}
                  onIncrement={this.IncrementOffCount}
                  // history ={props.history}
                  // location = {props.location}
                  // match = {props.match}
                  {...props}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route
              path="/menu"
              render={(props) => (
                <Menu products={this.state.products} addTo ={this.addToCard} {...props}  />
              )}
            />
            <Redirect from="/" to="/home" />
            <Redirect to="/notfound" />
          </Switch>
          {/* <ShopingCart
            products={this.state.products}
            onDelete={this.DeleteHandeler}
            onReset={this.resetHandeler}
            onIncrement={this.IncrementOffCount}
          /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
