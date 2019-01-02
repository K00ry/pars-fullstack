import React, { Component } from "react";
import axios from "axios";

class Admin extends Component {
  state = {
    enteredEmail: " "
  };

  // handleSubmit func cant set the state value for post request value unless you bind (this) with constructor ^
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/admin", this.state.enteredEmail)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("this is error", error);
      });
  }
  //  set the val of the form input as  the state of component
  onEmailInput = e => {
    this.setState({
      enteredEmail: e.target.value
    });
  };

  render() {
    return (
      <form method="POST" onSubmit={this.handleSubmit} className="admin-form">
        <label htmlFor="Email">Hi Kasra </label>
        <br />
        <input
          onChange={this.onEmailInput}
          type="text"
          id="Email"
          name="email"
          placeholder="Emaile koso sher"
        />
        <br />
        <button type="submit">SUBMIT!</button>
      </form>
    );
  }
}

export default Admin;
