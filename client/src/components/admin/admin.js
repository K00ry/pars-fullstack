import React, { Component } from "react";
import axios from "axios";
import Blocks from "./blocks";
import KerbStoneRingsSlabsForm from "./kerbStonekavalForm";
import PaversMosaicsForm from "./paversMosaicsForm";
import SelectInput from "./selectInput";
import TableWithPrice from "./table/tableWithPrice";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    message: "Please enter product description",
    genreEn: " ",
    genreId: " ",
    FromServer: [],
    addedToDB: [],
    type: "",
    price: "",
    shipping: ""
  };

  // componentDidMount() {
  //   axios
  //     .get("/admin")
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log("this is error", error);
  //     });
  // }

  /// useful callback function to request for showing data from database in to the table
  dataFetchCall = (productName, productId) => {
    let url = "/admin/" + productName;
    axios
      .get(url, {
        params: {
          genreId: productId
        }
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          FromServer: response.data
        });
      })
      .catch(error => {
        console.log("this is error", error);
      });
  };

  // handleSubmit func cant set the state value for post request value unless you bind (this) with constructor ^

  handleSubmit(e) {
    e.preventDefault();
    let url = "/admin/" + this.state.genreEn;
    axios
      .post(url, this.state)
      .then(response => {
        this.setState(
          {
            addedToDB: response.data
          },
          () => this.dataFetchCall(this.state.genreEn, this.state.genreId)
        );

        console.log(response.data);
      })
      .catch(error => {
        console.log("this is error", error);
      });
    e.target.reset();
  }

  // function to take care of sending a request to delete a product from the data base
  deleteProductFromDb = id => {
    let url = `/admin/${this.state.genreEn}/delete/`;
    axios
      .get(url, {
        params: {
          genreId: this.state.genreId,
          _id: id
        }
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          FromServer: response.data,
          addedToDB: []
        });
      })
      .catch(error => {
        console.log("this is error", error);
      });
  };

  //  set the value of the form input as the state of the component and sending a post req to the api in callback

  onSelectInput = e => {
    let op = e.target.options[e.target.selectedIndex];
    let optGroupName = op.parentNode.label;

    this.setState(
      {
        genreEn: optGroupName,
        genreId: e.target.value
      },
      () => this.dataFetchCall(this.state.genreEn, this.state.genreId)
    );
  };

  koorysChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let rightForm;
    let stateOfProduct = this.state.genreEn;
    if (
      stateOfProduct === "kerbStone" ||
      stateOfProduct === "slabs" ||
      stateOfProduct === "rings"
    ) {
      rightForm = <KerbStoneRingsSlabsForm onType={this.koorysChange} />;
    } else if (stateOfProduct === "blocks") {
      rightForm = <Blocks onType={this.koorysChange} />;
    } else if (stateOfProduct === " ") {
      rightForm = null;
    } else {
      rightForm = <PaversMosaicsForm onType={this.koorysChange} />;
    }
    return (
      <div className="admin-page-container">
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
        <h1 className="status">{this.state.addedToDB.message}</h1>
        <TableWithPrice
          t={this.props.t}
          fromServer={this.state.FromServer}
          deleteProductFromDb={this.deleteProductFromDb}
        />
      </div>
    );
  }
}

export default Admin;
