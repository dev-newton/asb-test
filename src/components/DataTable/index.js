import React from "react";
import iconDown from "../../assets/images/Master.png";
import arrowDown from "../../assets/images/arrow-down.png";
import arrowRight from "../../assets/images/arrow-right.png";
import arrowUp from "../../assets/images/arrow-up.png";
import dots from "../../assets/images/3dots.png";

export default function DataTable({ tableData }) {
  const tableDataArray = () =>
    tableData.map((data, i) => {
      const risk_data_size =
        data.risk === "Low"
          ? 15
          : data.risk === "Mid"
          ? 22
          : data.risk === "High" && 11;

      const risk_data_icon =
        data.risk === "Low"
          ? arrowDown
          : data.risk === "Mid"
          ? arrowRight
          : data.risk === "High" && arrowUp;

      const risk_data_color =
        data.risk === "Mid" ? "#3C3AB6" : data.risk === "High" && "#B63A3A";

      return (
        <tr key={i}>
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
            <p className="name-style">{data.name}</p>
          </td>
          <td style={{ paddingTop: 19 }}>
            <p className="location-one-style">{data.location[0]}</p>
            <p className="location-two-style">{data.location[1]}</p>
          </td>
          <td style={{ paddingTop: 25 }}>
            <p className={data.status > 0 ? "status-style-2" : "status-style"}>
              {data.status === 0
                ? "No Issues"
                : `${data.status} Issue(s) found`}
            </p>
          </td>
          <td style={{ paddingTop: 19 }}>
            <p className="entries-style">
              <i class="fa fa-circle entries-icon-style" aria-hidden="true"></i>
              {data.entries[0]} Unique Entries
            </p>
            <p className="entries-style-2">{data.entries[1]}</p>
          </td>
          <td style={{ paddingTop: 30 }}>
            <div className="risk-style" style={{ color: risk_data_color }}>
              <img
                src={risk_data_icon}
                width={risk_data_size}
                height={risk_data_size}
                class="d-inline-block align-top"
                alt=""
              />
              &nbsp;
              <label style={{ marginTop: data.risk === "Mid" && 5 }}>
                {data.risk} Risk
              </label>
            </div>
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
      );
    });

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
        <tbody>{tableDataArray()}</tbody>
      </table>
    </div>
  );
}
