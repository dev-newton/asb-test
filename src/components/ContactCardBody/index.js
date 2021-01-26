import React from "react";

export default function ContactCardBody({ icon, iconText, textStyle }) {
  return (
    <>
      <div className="col-1" style={{ height: 20 }}>
        <img
          src={icon}
          width="15"
          height="15"
          class="d-inline-block align-top"
          alt=""
        />
      </div>
      <div
        style={{
          paddingTop: 0,
          paddingBottom: 0,
        }}
        className="col-10 contact-text"
      >
        <p style={textStyle}>{iconText}</p>
      </div>
    </>
  );
}
