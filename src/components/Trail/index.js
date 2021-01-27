import React from "react";
import ContactCardHeader from "../ContactCardHeader";
import ContactCardBody from "../ContactCardBody";

import speaker from "../../assets/images/Icon 2.png";
import circle from "../../assets/images/Ellipse 6.png";

export default function Trail({ moduleHistory }) {
  const moduleHistoryArray = () =>
    moduleHistory.map((mh, i) => (
      <ContactCardBody
        cardBody
        key={i}
        iconStyle={{ width: 9, height: 9 }}
        textStyle={{ marginTop: -5, color: "#747474", fontSize: 12 }}
        iconText2={`${mh.date} - ${mh.platform}`}
        icon={circle}
        iconText={`Searched "${mh.action}" on Division module`}
      />
    ));
  return (
    <div className="row trail-style">
      <ContactCardHeader icon={speaker} iconText="Module History" />
      {moduleHistoryArray()}
    </div>
  );
}
