import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Card from "../../components/Card";
import ContactCard from "../../components/ContactCard";
import { CardSubtitle } from "reactstrap";

export default function Dashboard() {
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
      <div className="row">
        <ContactCard className="col-2" />
      </div>
    </div>
  );
}
