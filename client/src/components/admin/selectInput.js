import React from "react";

const SelectInput = props => (
  <select id="select" name="product" onChange={props.onSelectInput}>
    <optgroup label="jadval">
      <option value="wet">wet press</option>
      <option value="kush">press khoshk</option>
      <option value="hand">dasti</option>
    </optgroup>
    <optgroup label="blook">
      <option value="pooke">sabok pooke</option>
      <option value="simani">simani</option>
    </optgroup>
    <optgroup label="kafpoosh">
      <option value="khoshk">press khoshk</option>
      <option value="wet">wet press</option>
      <option value="vibrate">vibre</option>
      <option value="wash">wash betton</option>
    </optgroup>
    <optgroup label="dal">
      <option value="light">dal sabok</option>
      <option value="heavy">dal sangin</option>
    </optgroup>
    <optgroup label="mozayik">
      <option value="simple">sade</option>
      <option value="hayati">hayati</option>
    </optgroup>
    <optgroup label="kaval">
      <option value="gerd">sade</option>
      <option value="anbari">hayati</option>
      <option value="takhte">takhte</option>
    </optgroup>
    <optgroup label="mobleman">
      <option value="stopper">stopper</option>
      <option value="bench">bench</option>
    </optgroup>
    <optgroup label="nj">
      <option value="jersey">jersey</option>
      <option value="mini">mini jersey</option>
    </optgroup>
  </select>
);

export default SelectInput;
