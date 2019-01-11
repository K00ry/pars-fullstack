import React, { Component } from "react";
import axios from "axios";

import KerbStoneRingsSlabsForm from "./kerbStonekavalForm";
import PaversMosaicsForm from "./paversMosaicsForm";
import SelectInput from "./selectInput";

class Admin extends Component {
  state = {
    message: "Please enter product description",
    genreEn: " ",
    genreId: " "
  };

  // handleSubmit func cant set the state value for post request value unless you bind (this) with constructor ^
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let url = "/admin/" + this.state.genreEn;
    axios
      .post(url, this.state)
      .then(response => {
        this.setState({
          message: response.data.message
        });
        console.log(response.data);
      })
      .catch(error => {
        console.log("this is error", error);
      });
  }

  componentDidMount() {
    axios
      .get("/admin")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("this is error", error);
      });
  }

  //  set the val of the form input as  the state of  the component for sending a post req to the api

  onSelectInput = e => {
    let op = e.target.options[e.target.selectedIndex];
    let optGroupName = op.parentNode.label;

    this.setState({
      genreEn: optGroupName,
      genreId: e.target.value
    });
  };

  onTypeInput = e => {
    this.setState({
      type: e.target.value
    });
  };
  onPriceInput = e => {
    this.setState({
      price: e.target.value
    });
  };
  onShippingInput = e => {
    this.setState({
      shipping: e.target.value
    });
  };
  onImgInput = e => {
    this.setState({
      img: e.target.value
    });
  };
  onSquareFeetInput = e => {
    this.setState({
      inSquarefeet: e.target.value
    });
  };
  onGreyInput = e => {
    this.setState({
      toosi: e.target.value
    });
  };
  onYellowInput = e => {
    this.setState({
      yellowmix: e.target.value
    });
  };
  onRedInput = e => {
    this.setState({
      red: e.target.value
    });
  };

  render() {
    let rightForm;
    let stateOfProduct = this.state.genreEn;
    if (
      stateOfProduct === "kerbStone" ||
      stateOfProduct === "slabs" ||
      stateOfProduct === "rings"
    ) {
      rightForm = (
        <KerbStoneRingsSlabsForm
          onTypeInput={this.onTypeInput}
          onPriceInput={this.onPriceInput}
          onShippingInput={this.onShippingInput}
        />
      );
    } else if (stateOfProduct === " ") {
      rightForm = null;
    } else {
      rightForm = (
        <PaversMosaicsForm
          onTypeInput={this.onTypeInput}
          onImgInput={this.onImgInput}
          onSquareFeetInput={this.onSquareFeetInput}
          onGreyInput={this.onGreyInput}
          onYellowInput={this.onYellowInput}
          onRedInput={this.onRedInput}
          onShippingInput={this.onShippingInput}
        />
      );
    }
    return (
      <div className="admin-page-container">
        <h1>{this.state.message}</h1>

        <form
          method="POST"
          action="/admin"
          onSubmit={this.handleSubmit}
          className="admin-form"
        >
          <fieldset>
            <legend>Hi Kasra</legend>
            <br />
            <label htmlFor="select">Product to add</label>
            <br />
            <br />
            <SelectInput onSelectInput={this.onSelectInput} />
            <br />
          </fieldset>

          {rightForm}

          <br />
          <br />
          <button type="submit">SUBMIT!</button>
        </form>
      </div>
    );
  }
}

export default Admin;
