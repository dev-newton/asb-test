import React from "react";

export default function ContactCardHeader({ icon, iconText }) {
  return (
    <>
      <div className="col-2">
        <img
          src={icon}
          width="31"
          height="31"
          class="d-inline-block align-top"
          alt=""
          style={{ margin: 0 }}
        />
      </div>
      <div className="col-10 contact-header-text" style={{ margin: 0 }}>
        <p>{iconText}</p>
      </div>
    </>
  );
}
