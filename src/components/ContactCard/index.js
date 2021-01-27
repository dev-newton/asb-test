import React from "react";
import ContactCardHeader from "../../components/ContactCardHeader";
import ContactCardBody from "../../components/ContactCardBody";
import Trail from "../../components/Trail";

import chess from "../../assets/images/Icon.png";
import call from "../../assets/images/Vector.png";
import message from "../../assets/images/envelope 1.png";
import pin from "../../assets/images/pin 1.png";
import note from "../../assets/images/notes-book 1.png";
import print from "../../assets/images/Group 1800.png";

export default function ContactCard({ divisionSummary }) {
  const {
    phone,
    email,
    address,
    journal_entries,
    finger_prints,
  } = divisionSummary;

  return (
    <div className="row contact-card-style">
      <ContactCardHeader icon={chess} iconText="Division Summary" />
      <ContactCardBody icon={call} iconText={phone} />
      <ContactCardBody icon={message} iconText={email} />
      <ContactCardBody icon={pin} iconText={address} />
      <ContactCardBody
        icon={note}
        iconText={`${journal_entries} Journal entries`}
        textStyle={{ color: "#5771EE", textDecoration: "underline" }}
      />
      <ContactCardBody
        icon={print}
        iconText={`${finger_prints} fingerprints enrolled`}
      />
    </div>
  );
}
