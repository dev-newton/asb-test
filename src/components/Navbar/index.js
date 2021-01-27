import React from "react";
import logo from "../../assets/images/logo_bw.png";
import bell from "../../assets/images/Shape.png";
import home from "../../assets/images/home.png";
import box from "../../assets/images/box.png";
import divi from "../../assets/images/Opportunitiy.png";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand nav-brand-style" href="#">
          <img
            src={logo}
            width="32"
            height="27"
            class="d-inline-block align-top"
            alt=""
          />
          <label className="nav-logo-style">FE Engineer Test 1</label>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto ">
            <li class="nav-item" style={{ marginRight: 29 }}>
              <a class="nav-link nav-item-style" href="#">
                <img
                  src={home}
                  style={{ marginRight: 9, cursor: "pointer" }}
                  width="16"
                  height="18"
                  class="d-inline-block align-top "
                  alt=""
                />
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item" style={{ marginRight: 29 }}>
              <a class="nav-link nav-item-style" href="#">
                <img
                  src={box}
                  style={{ marginRight: 9, cursor: "pointer" }}
                  width="16"
                  height="18"
                  class="d-inline-block align-top "
                  alt=""
                />
                Entries
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-item-style-active" href="#">
                <img
                  src={divi}
                  style={{ marginRight: 9, cursor: "pointer" }}
                  width="16"
                  height="18"
                  class="d-inline-block align-top "
                  alt=""
                />
                Divisions
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <div class="input-group mb-3 mt-3">
              <div class="input-group-append">
                <button
                  style={{
                    borderRight: "none",
                    borderTopLeftRadius: 4,
                    borderBottomLeftRadius: 4,
                    borderColor: "#ced4da",
                  }}
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  {" "}
                  <i
                    class="fa fa-search"
                    style={{ color: "#778699" }}
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
              <input
                style={{
                  borderLeft: "none",
                }}
                type="text"
                class="form-control"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
            </div>
            <img
              src={bell}
              style={{ marginLeft: 32, cursor: "pointer" }}
              width="16"
              height="18"
              class="d-inline-block align-top "
              alt=""
            />
            <i
              style={{
                color: "#778699",
                fontSize: 18,
                marginLeft: 32,
                cursor: "pointer",
              }}
              class="fa fa-user-circle-o"
              aria-hidden="true"
            ></i>
            <i
              style={{
                color: "#778699",
                fontSize: 18,
                marginLeft: 7,
                cursor: "pointer",
              }}
              class="fa fa-angle-down"
              aria-hidden="true"
            ></i>
          </form>
        </div>
      </nav>
      <hr
        style={{ borderWidth: 1, borderColor: "#ddd", padding: 0, margin: 0 }}
      />
    </div>
  );
}
