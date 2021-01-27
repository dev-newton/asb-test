import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Card from "../../components/Card";
import ContactCard from "../../components/ContactCard";
import Trail from "../../components/Trail";
import DataTable from "../../components/DataTable";

import { useDispatch, useSelector } from "react-redux";
import { getDivisionSummary } from "../../store/actions/asb";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [divisionSummary, setDivisionSummary] = useState({});

  const division_summary_result = useSelector(
    (state) => state.asb.division_summary
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetchDivisionSummary();
  }, []);

  useEffect(() => {
    setDivisionSummary(division_summary_result);
  }, [division_summary_result]);

  const fetchDivisionSummary = async () => {
    setLoading(true);
    try {
      await dispatch(getDivisionSummary());
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("failed", error.response);
    }
  };

  return (
    <div className="text-color" style={{ margin: 20 }}>
      <Breadcrumb />
      <div className="row" style={{ marginBottom: 24 }}>
        <Card className="col-2" number="31454" text="Ongoing metric" />
        <Card className="col-2" number="2344" text="Past metric" />
        <Card className="col-2" number="14224" text="Missed metric" />
        <Card className="col-2" number="635" text="Failed metric" />
        <Card className="col-2" number="11334" text="Pending metric" />
      </div>
      <div className="row" style={{ marginBottom: 24 }}>
        <div>
          {loading ? (
            <i style={{ marginLeft: 120 }} class="fa fa-cog"></i>
          ) : (
            <ContactCard divisionSummary={divisionSummary} className="col-2" />
          )}
          <Trail />
        </div>
        <DataTable className="col-8" />
      </div>
    </div>
  );
}
