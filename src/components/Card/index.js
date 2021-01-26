import React from "react";
import info from "../../assets/images/info-icon.svg";

export default function Card({ number, text }) {
  return (
    <div className="row card-style">
      <div className="col-9">
        <p className="number-style">{number}</p>
        <p className="number-text-style">{text}</p>
      </div>
      <div className="col-3 align-self-center info-style">
        <img
          src={info}
          width="32"
          height="27"
          class="d-inline-block align-top info"
          alt=""
        />
      </div>
    </div>
  );
}
