import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Card from "../../components/Card";
import ContactCard from "../../components/ContactCard";
import Trail from "../../components/Trail";
import DataTable from "../../components/DataTable";

import { useDispatch, useSelector } from "react-redux";
import {
  getDivisionSummary,
  getMetrics,
  getModuleHistory,
  getTableData,
} from "../../store/actions/asb";

export default function Dashboard() {
  const [loadingDivisionSummary, setLoadingDivisionSummary] = useState(false);
  const [loadingMetrics, setLoadingMetrics] = useState(false);
  const [loadingModuleHistory, setLoadingModuleHistory] = useState(false);
  const [loadingTableData, setLoadingTableData] = useState(false);

  const [errorDivisionSummary, setErrorDivisionSummary] = useState(null);
  const [errorMetrics, setErrorMetrics] = useState(null);
  const [errorModuleHistory, setErrorModuleHistory] = useState(null);
  const [errorTableData, setErrorTableData] = useState(null);

  const [divisionSummary, setDivisionSummary] = useState({});
  const [metrics, setMetrics] = useState({});
  const [moduleHistory, setModuleHistory] = useState([]);
  const [tableData, setTableData] = useState([]);

  const division_summary_result = useSelector(
    (state) => state.asb.division_summary
  );
  const metrics_result = useSelector((state) => state.asb.metrics);
  const module_history_result = useSelector(
    (state) => state.asb.module_history
  );
  const table_data_result = useSelector((state) => state.asb.table_data);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchDivisionSummary();
    fetchMetrics();
    fetchModuleHistory();
    fetchTableData();
  }, []);

  useEffect(() => {
    setDivisionSummary(division_summary_result);
    setMetrics(metrics_result);
    setModuleHistory(module_history_result);
    setTableData(table_data_result);
  }, [
    division_summary_result,
    metrics_result,
    module_history_result,
    table_data_result,
  ]);

  const fetchDivisionSummary = async () => {
    setLoadingDivisionSummary(true);
    try {
      await dispatch(getDivisionSummary());
      setLoadingDivisionSummary(false);
    } catch (error) {
      setLoadingDivisionSummary(false);
      setErrorDivisionSummary([error.response]);
      console.log("failed", error.response);
    }
  };

  const fetchMetrics = async () => {
    setLoadingMetrics(true);
    try {
      await dispatch(getMetrics());
      setLoadingMetrics(false);
    } catch (error) {
      setLoadingMetrics(false);
      setErrorMetrics([error.response]);
      console.log("failed", error.response);
    }
  };

  const fetchModuleHistory = async () => {
    setLoadingModuleHistory(true);
    try {
      await dispatch(getModuleHistory());
      setLoadingModuleHistory(false);
    } catch (error) {
      setLoadingModuleHistory(false);
      setErrorModuleHistory([error.response]);
      console.log("failed", error.response);
    }
  };

  const fetchTableData = async () => {
    setLoadingTableData(true);
    try {
      await dispatch(getTableData());
      setLoadingTableData(false);
    } catch (error) {
      setLoadingTableData(false);
      setErrorTableData([error.response]);
      console.log("failed", error.response);
    }
  };

  const loading =
    loadingDivisionSummary &&
    loadingMetrics &&
    loadingModuleHistory &&
    loadingTableData;

  const errors =
    errorDivisionSummary ||
    errorMetrics ||
    errorModuleHistory ||
    errorTableData;

  const { ongoing, past, missed, failed, pending } = metrics;

  return (
    <div>
      {errors ? (
        <div
          style={{ marginTop: "4%" }}
          class="alert alert-danger offset-3 col-6"
          role="alert"
        >
          <h4 class="alert-heading">Error: {errors[0].statusText} </h4>
          <hr />
          <p class="mb-0">
            Try and{" "}
            <a
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => window.location.reload()}
            >
              <b>reload the page</b>
            </a>{" "}
            in a few seconds and you should be fine.
          </p>
        </div>
      ) : loading ? (
        <i
          style={{
            marginLeft: "50%",
            marginTop: "15%",
            fontSize: 60,
            color: "#01a2d6",
          }}
          class="fa fa-cog fa-spin"
        ></i>
      ) : (
        <div className="text-color" style={{ margin: 20 }}>
          <Breadcrumb />
          <div className="row" style={{ marginBottom: 24 }}>
            <Card className="col-2" number={ongoing} text="Ongoing metric" />
            <Card className="col-2" number={past} text="Past metric" />
            <Card className="col-2" number={missed} text="Missed metric" />
            <Card className="col-2" number={failed} text="Failed metric" />
            <Card className="col-2" number={pending} text="Pending metric" />
          </div>
          <div className="row" style={{ marginBottom: 24 }}>
            <div>
              {
                <ContactCard
                  divisionSummary={divisionSummary}
                  className="col-2"
                />
              }

              <Trail moduleHistory={moduleHistory} />
            </div>
            <DataTable tableData={tableData} className="col-8" />
          </div>
        </div>
      )}
    </div>
  );
}
