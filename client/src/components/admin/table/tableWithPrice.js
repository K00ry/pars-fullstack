import React, { Component } from "react";
import Table from "./table";

class TableWithPrice extends Component {
  state = {
    prodCheck: "",
    fromServer: [],
    updatedFromServer: []
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.fromServer !== prevProps.fromServer) {
      this.setState({
        prodCheck: this.props.fromServer.genreEn,
        updatedFromServer: this.props.fromServer.sizes
      });
    }
  }

  render() {

    let correctTableHead;
    if(this.state.prodCheck === "jadval"){
      correctTableHead =
          <tr>
            <th className="tg-6xid">{this.props.t("ship")}</th>
            <th className="tg-4s02">{this.props.t("price")}</th>
            <th>{this.props.t("sizes")}</th>
          </tr>;

    } else if (this.state.prodCheck === "blook"){
       correctTableHead =
          <tr>
            <th className="tg-6xid">{this.props.t("ship")}</th>
            <th className="tg-4s02">{this.props.t("price")}</th>
            <th>{this.props.t("sizes")}</th>
            <th>{this.props.t("type")}</th>
          </tr>;
    } else if (this.state.prodCheck === "kafpoosh"){
        correctTableHead =
            <tr>
                <th>{this.props.t("model")}</th>
                <th>N in Square meter</th>
                <th>img route</th>
            </tr>;
    }   else if (this.state.prodCheck === "dal" || this.state.prodCheck === "mozayik" || this.state.prodCheck === "kaval"){
        correctTableHead =
            <tr>
                <th>{this.props.t("type")}</th>
            </tr>;
    }

    return (
      <table className={`tg-${this.props.t("lang-class")}`}>
        <tbody>
          {correctTableHead}
          {this.state.updatedFromServer.map((kbj, index) => (
            <Table
              check={this.state.prodCheck}
              deleteProductFromDb={() =>
                this.props.deleteProductFromDb(kbj._id)
              }
              key={index}
              id={kbj._id}
              type={kbj.type}
              img={kbj.img}
              price={kbj.price}
              shipping={kbj.shipping}
              size={kbj.size}
              square={kbj.inSquarefeet}
              t={this.props.t}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default TableWithPrice;
