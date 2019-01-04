import React from "react";

const PaversMosaicsForm = props => {
  return (
    <>
      <br />
      <label htmlFor="img">IMG</label>
      <br />
      <input
        onChange={props.onImgInput}
        type="text"
        id="img"
        name="img"
        placeholder="..."
      />
      <br />

      <br />
      <label htmlFor="type">Type</label>
      <br />
      <input
        onChange={props.onTypeInput}
        type="text"
        id="type"
        name="Type"
        placeholder="..."
      />
      <br />

      <br />
      <label htmlFor="SquareFeet">Peace In Square feet</label>
      <br />
      <input
        onChange={props.onSquareFeetInput}
        type="text"
        id="SquareFeet"
        name="SquareFeet"
        placeholder="..."
      />
      <br />

      <br />
      <label htmlFor="grey">Grey color Price</label>
      <br />
      <input
        onChange={props.onGreyInput}
        type="text"
        id="grey"
        name="grey"
        placeholder="..."
      />
      <br />

      <br />
      <label htmlFor="red">Red color Price</label>
      <br />
      <input
        onChange={props.onRedInput}
        type="text"
        id="red"
        name="red"
        placeholder="..."
      />
      <br />

      <br />
      <label htmlFor="yellow">Yellow color Price</label>
      <br />
      <input
        onChange={props.onYellowInput}
        type="text"
        id="yellow"
        name="yellow"
        placeholder="..."
      />
      <br />

      <br />
      <label htmlFor="shipping">Shipping</label>
      <br />
      <input
        onChange={props.onShippingInput}
        type="text"
        id="shipping"
        name="shipping"
        placeholder="..."
      />
      <br />
    </>
  );
};

export default PaversMosaicsForm;
