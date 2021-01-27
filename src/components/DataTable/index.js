import React from "react";
import iconDown from "../../assets/images/Master.png";
import arrowDown from "../../assets/images/arrow-down.png";
import arrowRight from "../../assets/images/arrow-right.png";
import arrowUp from "../../assets/images/arrow-up.png";
import dots from "../../assets/images/3dots.png";

export default function DataTable({ icon, iconText }) {
  return (
    <div className="table-container">
      <table className="table table-style">
        <thead className="thead-light">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>NAME</th>
            <th>LOCATION</th>
            <th>STATUS</th>
            <th>ENTRIES</th>
            <th colSpan="2">RISK PROFILE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ paddingTop: 25 }}>
              <input type="checkbox" />
              <img
                src={iconDown}
                width="15"
                height="15"
                class="d-inline-block align-top checkbox-style"
                alt=""
              />
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="name-style">Courtney Henry</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="location-one-style">Lagos</p>
              <p className="location-two-style">775 Rolling Green Rd.</p>
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="status-style">No Issues</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="entries-style">
                <i
                  class="fa fa-circle entries-icon-style"
                  aria-hidden="true"
                ></i>
                19 Unique Entries
              </p>
              <p className="entries-style-2">Heterogenous</p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <p className="risk-style" style={{}}>
                <img
                  src={arrowDown}
                  width="15"
                  height="15"
                  class="d-inline-block align-top"
                  alt=""
                />
                Low Risk
              </p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <img
                src={dots}
                width="4"
                height="15"
                class="d-inline-block align-top"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: 25 }}>
              <input type="checkbox" />
              <img
                src={iconDown}
                width="15"
                height="15"
                class="d-inline-block align-top checkbox-style"
                alt=""
              />
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="name-style">Courtney Henry</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="location-one-style">Lagos</p>
              <p className="location-two-style">775 Rolling Green Rd.</p>
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="status-style">No Issues</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="entries-style">
                <i
                  class="fa fa-circle entries-icon-style"
                  aria-hidden="true"
                ></i>
                19 Unique Entries
              </p>
              <p className="entries-style-2">Heterogenous</p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <p className="risk-style" style={{}}>
                <img
                  src={arrowDown}
                  width="15"
                  height="15"
                  class="d-inline-block align-top"
                  alt=""
                />
                Low Risk
              </p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <img
                src={dots}
                width="4"
                height="15"
                class="d-inline-block align-top"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: 25 }}>
              <input type="checkbox" />
              <img
                src={iconDown}
                width="15"
                height="15"
                class="d-inline-block align-top checkbox-style"
                alt=""
              />
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="name-style">Courtney Henry</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="location-one-style">Lagos</p>
              <p className="location-two-style">775 Rolling Green Rd.</p>
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="status-style">No Issues</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="entries-style">
                <i
                  class="fa fa-circle entries-icon-style"
                  aria-hidden="true"
                ></i>
                19 Unique Entries
              </p>
              <p className="entries-style-2">Heterogenous</p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <p className="risk-style" style={{}}>
                <img
                  src={arrowDown}
                  width="15"
                  height="15"
                  class="d-inline-block align-top"
                  alt=""
                />
                Low Risk
              </p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <img
                src={dots}
                width="4"
                height="15"
                class="d-inline-block align-top"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: 25 }}>
              <input type="checkbox" />
              <img
                src={iconDown}
                width="15"
                height="15"
                class="d-inline-block align-top checkbox-style"
                alt=""
              />
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="name-style">Courtney Henry</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="location-one-style">Lagos</p>
              <p className="location-two-style">775 Rolling Green Rd.</p>
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="status-style">No Issues</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="entries-style">
                <i
                  class="fa fa-circle entries-icon-style"
                  aria-hidden="true"
                ></i>
                19 Unique Entries
              </p>
              <p className="entries-style-2">Heterogenous</p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <p className="risk-style" style={{}}>
                <img
                  src={arrowDown}
                  width="15"
                  height="15"
                  class="d-inline-block align-top"
                  alt=""
                />
                Low Risk
              </p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <img
                src={dots}
                width="4"
                height="15"
                class="d-inline-block align-top"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: 25 }}>
              <input type="checkbox" />
              <img
                src={iconDown}
                width="15"
                height="15"
                class="d-inline-block align-top checkbox-style"
                alt=""
              />
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="name-style">Courtney Henry</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="location-one-style">Lagos</p>
              <p className="location-two-style">775 Rolling Green Rd.</p>
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="status-style">No Issues</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="entries-style">
                <i
                  class="fa fa-circle entries-icon-style"
                  aria-hidden="true"
                ></i>
                19 Unique Entries
              </p>
              <p className="entries-style-2">Heterogenous</p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <p className="risk-style" style={{}}>
                <img
                  src={arrowDown}
                  width="15"
                  height="15"
                  class="d-inline-block align-top"
                  alt=""
                />
                Low Risk
              </p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <img
                src={dots}
                width="4"
                height="15"
                class="d-inline-block align-top"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: 25 }}>
              <input type="checkbox" />
              <img
                src={iconDown}
                width="15"
                height="15"
                class="d-inline-block align-top checkbox-style"
                alt=""
              />
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="name-style">Courtney Henry</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="location-one-style">Lagos</p>
              <p className="location-two-style">775 Rolling Green Rd.</p>
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="status-style">No Issues</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="entries-style">
                <i
                  class="fa fa-circle entries-icon-style"
                  aria-hidden="true"
                ></i>
                19 Unique Entries
              </p>
              <p className="entries-style-2">Heterogenous</p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <p className="risk-style" style={{}}>
                <img
                  src={arrowDown}
                  width="15"
                  height="15"
                  class="d-inline-block align-top"
                  alt=""
                />
                Low Risk
              </p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <img
                src={dots}
                width="4"
                height="15"
                class="d-inline-block align-top"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: 25 }}>
              <input type="checkbox" />
              <img
                src={iconDown}
                width="15"
                height="15"
                class="d-inline-block align-top checkbox-style"
                alt=""
              />
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="name-style">Courtney Henry</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="location-one-style">Lagos</p>
              <p className="location-two-style">775 Rolling Green Rd.</p>
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="status-style">No Issues</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="entries-style">
                <i
                  class="fa fa-circle entries-icon-style"
                  aria-hidden="true"
                ></i>
                19 Unique Entries
              </p>
              <p className="entries-style-2">Heterogenous</p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <p className="risk-style" style={{}}>
                <img
                  src={arrowDown}
                  width="15"
                  height="15"
                  class="d-inline-block align-top"
                  alt=""
                />
                Low Risk
              </p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <img
                src={dots}
                width="4"
                height="15"
                class="d-inline-block align-top"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: 25 }}>
              <input type="checkbox" />
              <img
                src={iconDown}
                width="15"
                height="15"
                class="d-inline-block align-top checkbox-style"
                alt=""
              />
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="name-style">Courtney Henry</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="location-one-style">Lagos</p>
              <p className="location-two-style">775 Rolling Green Rd.</p>
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="status-style">No Issues</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="entries-style">
                <i
                  class="fa fa-circle entries-icon-style"
                  aria-hidden="true"
                ></i>
                19 Unique Entries
              </p>
              <p className="entries-style-2">Heterogenous</p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <p className="risk-style" style={{}}>
                <img
                  src={arrowDown}
                  width="15"
                  height="15"
                  class="d-inline-block align-top"
                  alt=""
                />
                Low Risk
              </p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <img
                src={dots}
                width="4"
                height="15"
                class="d-inline-block align-top"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: 25 }}>
              <input type="checkbox" />
              <img
                src={iconDown}
                width="15"
                height="15"
                class="d-inline-block align-top checkbox-style"
                alt=""
              />
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="name-style">Courtney Henry</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="location-one-style">Lagos</p>
              <p className="location-two-style">775 Rolling Green Rd.</p>
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="status-style">No Issues</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="entries-style">
                <i
                  class="fa fa-circle entries-icon-style"
                  aria-hidden="true"
                ></i>
                19 Unique Entries
              </p>
              <p className="entries-style-2">Heterogenous</p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <p className="risk-style" style={{}}>
                <img
                  src={arrowDown}
                  width="15"
                  height="15"
                  class="d-inline-block align-top"
                  alt=""
                />
                Low Risk
              </p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <img
                src={dots}
                width="4"
                height="15"
                class="d-inline-block align-top"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: 25 }}>
              <input type="checkbox" />
              <img
                src={iconDown}
                width="15"
                height="15"
                class="d-inline-block align-top checkbox-style"
                alt=""
              />
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="name-style">Courtney Henry</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="location-one-style">Lagos</p>
              <p className="location-two-style">775 Rolling Green Rd.</p>
            </td>
            <td style={{ paddingTop: 25 }}>
              <p className="status-style">No Issues</p>
            </td>
            <td style={{ paddingTop: 19 }}>
              <p className="entries-style">
                <i
                  class="fa fa-circle entries-icon-style"
                  aria-hidden="true"
                ></i>
                19 Unique Entries
              </p>
              <p className="entries-style-2">Heterogenous</p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <p className="risk-style" style={{}}>
                <img
                  src={arrowDown}
                  width="15"
                  height="15"
                  class="d-inline-block align-top"
                  alt=""
                />
                Low Risk
              </p>
            </td>
            <td style={{ paddingTop: 30 }}>
              <img
                src={dots}
                width="4"
                height="15"
                class="d-inline-block align-top"
                alt=""
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
