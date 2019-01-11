import React from "react";

const Blocks = props => {
  return (
    <>
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
      <label htmlFor="size">Size</label>
      <br />
      <input
        onChange={props.onTypeInput}
        type="text"
        id="size"
        name="size"
        placeholder="..."
      />
      <br />

      <br />
      <label htmlFor="price">Price</label>
      <br />
      <input
        onChange={props.onPriceInput}
        type="text"
        id="price"
        name="price"
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
export default Blocks;
