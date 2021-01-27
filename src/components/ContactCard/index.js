import React from "react";
import ContactCardHeader from "../../components/ContactCardHeader";
import ContactCardBody from "../../components/ContactCardBody";
import Trail from "../../components/Trail";

import chess from "../../assets/images/Icon.png";
import phone from "../../assets/images/Vector.png";
import message from "../../assets/images/envelope 1.png";
import pin from "../../assets/images/pin 1.png";
import note from "../../assets/images/notes-book 1.png";
import print from "../../assets/images/Group 1800.png";

export default function ContactCard() {
  return (
    <div className="row contact-card-style">
      <ContactCardHeader icon={chess} iconText="Division Summary" />
      <ContactCardBody icon={phone} iconText="0801 234 5678" />
      <ContactCardBody icon={message} iconText="asbfefr@gmail.com" />
      <ContactCardBody icon={pin} iconText="Mojidi, Lagos" />
      <ContactCardBody
        icon={note}
        iconText="2 Journal entries"
        textStyle={{ color: "#5771EE", textDecoration: "underline" }}
      />
      <ContactCardBody icon={print} iconText="24 fingerprints enrolled" />

      {/* <Trail /> */}
    </div>
  );
}
