import React from "react";
import ContactCardHeader from "../ContactCardHeader";
import ContactCardBody from "../ContactCardBody";

import speaker from "../../assets/images/Icon 2.png";
import circle from "../../assets/images/Ellipse 6.png";
// import message from "../../assets/images/envelope 1.png";
// import pin from "../../assets/images/pin 1.png";
// import note from "../../assets/images/notes-book 1.png";
// import print from "../../assets/images/Group 1800.png";

export default function Trail() {
  return (
    <div className="row trail-style">
      <ContactCardHeader icon={speaker} iconText="Module History" />
      <ContactCardBody
        cardBody
        iconStyle={{ width: 9, height: 9 }}
        textStyle={{ marginTop: -5, color: "#747474", fontSize: 12 }}
        // textStyle1={{}}
        icon={circle}
        iconText={`Searched “Journal Entries” on Division module`}
      />

      <ContactCardBody
        cardBody
        textStyle={{ marginTop: -5, color: "#747474", fontSize: 12 }}
        iconStyle={{ width: 9, height: 9 }}
        icon={circle}
        iconText={`Searched “Fingerprint record” on Division module`}
      />

      <ContactCardBody
        cardBody
        textStyle={{ marginTop: -5, color: "#747474", fontSize: 12 }}
        iconStyle={{ width: 9, height: 9 }}
        icon={circle}
        iconText={`Searched “Journal Entries” on Division module`}
      />
    </div>
  );
}
