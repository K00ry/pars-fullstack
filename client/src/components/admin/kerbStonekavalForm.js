import React from "react";

const KerbStoneRingsSlabsForm = props => {
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
      <label htmlFor="squareFeet">In Square feet</label>
      <br />
      <input
        onChange={props.onPriceInput}
        type="text"
        id="squareFeet"
        name="squareFeet"
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

export default KerbStoneRingsSlabsForm;
