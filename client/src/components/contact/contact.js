import React from "react";
import ContactEN from "./contactEN";
import ContactFA from "./ContactFA";

const Contact = props => {
  let jaber = `container contact ${props.t("lang-class")}`;
  let naser;
  if (jaber === "container contact english") {
    naser = <ContactEN />;
  } else {
    naser = <ContactFA />;
  }

  return <div className={jaber}>{naser}</div>;
};

export default Contact;
