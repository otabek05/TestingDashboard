import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/Forms/SingleCard";



import MapComponent from "./MapComponent";

const carObj = {
  title: "Total Buildings",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Total Sensors",
  totalNumber: 1697,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Total Clients",
  totalNumber: "85k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Total Employees",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>
      </div>
      
      <MapComponent />
    </div>
  );
};

export default Dashboard;
