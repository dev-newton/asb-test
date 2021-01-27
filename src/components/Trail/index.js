import React from "react";
import ContactCardHeader from "../ContactCardHeader";
import ContactCardBody from "../ContactCardBody";

import speaker from "../../assets/images/Icon 2.png";
import circle from "../../assets/images/Ellipse 6.png";

export default function Trail() {
  return (
    <div className="row trail-style">
      <ContactCardHeader icon={speaker} iconText="Module History" />
      <ContactCardBody
        cardBody
        iconStyle={{ width: 9, height: 9 }}
        textStyle={{ marginTop: -5, color: "#747474", fontSize: 12 }}
        iconText2="22:10 15/09/2020 - Web"
        icon={circle}
        iconText={`Searched “Journal Entries” on Division module`}
      />

      <ContactCardBody
        cardBody
        textStyle={{ marginTop: -5, color: "#747474", fontSize: 12 }}
        iconText2="22:10 15/09/2020 - Web"
        iconStyle={{ width: 9, height: 9 }}
        icon={circle}
        iconText={`Searched “Fingerprint record” on Division module`}
      />

      <ContactCardBody
        cardBody
        textStyle={{ marginTop: -5, color: "#747474", fontSize: 12 }}
        iconStyle={{ width: 9, height: 9 }}
        icon={circle}
        iconText2="22:10 15/09/2020 - Web"
        iconText={`Searched “Journal Entries” on Division module`}
      />
    </div>
  );
}
