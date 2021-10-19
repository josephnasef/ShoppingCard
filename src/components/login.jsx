import React, { Component } from "react";
import joi, { abort, errors } from "joi-browser";
class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };

  HandelerSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (errors !== null) return;

    console.log("submit");
  };
  HandelChange = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);

    //  console.log(state);
  };
  schema = {
    username: joi.string().required(),
    password: joi.string().required(),
  };
  validate = () => {
    const errors = {};
    const state = { ...this.state };
    delete state.errors;
    const res = joi.validate(state, this.schema, { abortEarly: false });
if (res.error===null) {
  this.setState({errors:{}})
  return null;
}
for (const error of res.error.details)
{
  errors[error.path]= error.message;
}  
this.setState({errors})

    //console.log(res);
  };
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.HandelerSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              value={this.state.username}
              onChange={this.HandelChange}
              name="username"
              type="username"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            {this.state.errors.password &&
              <div className="alert alert-danger">
              {this.state.errors.username}
            </div>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={this.state.password}
              onChange={this.HandelChange}
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
           {this.state.errors.password &&
            <div className="alert alert-danger">
            {this.state.errors.password}

            </div>}
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
