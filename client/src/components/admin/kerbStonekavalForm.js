import React from "react";

const KerbStoneRingsSlabsForm = props => {
  return (
    <>
      <br />
      <label htmlFor="type">Type</label>
      <br />
      <input
        onChange={props.onType}
        type="text"
        id="type"
        name="type"
        placeholder="..."
      />
      <br />

      <br />
      <label htmlFor="Price">Price</label>
      <br />
      <input
        onChange={props.onType}
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
        onChange={props.onType}
        type="text"
        id="shipping"
        name="shipping"
        placeholder="..."
      />
      <br />
    </>
  );
};

export default KerbStoneRingsSlabsForm;
