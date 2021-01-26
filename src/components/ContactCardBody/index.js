import React from "react";

export default function ContactCardBody({
  icon,
  iconText,
  textStyle,
  textStyle1,
  iconStyle,
  cardBody,
}) {
  return (
    <>
      <div className="col-1" style={{ height: 20 }}>
        <img
          src={icon}
          width="15"
          height="15"
          class="d-inline-block align-top"
          alt=""
          style={iconStyle}
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
        {cardBody && (
          <p
            style={{
              marginTop: -15,
              fontSize: 12,
              color: "#A1AACE",
            }}
          >
            22:10 15/09/2020
          </p>
        )}
      </div>
    </>
  );
}
