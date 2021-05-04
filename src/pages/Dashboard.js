import React, { useContext } from "react";
import { connect } from "react-redux";
const Dashboard = ({ data = [] }) => {
  return (
    <main>
      <h1>Dashboard</h1>

      {data.map((item) => {
        return <p>{item.description}</p>;
      })}
    </main>
  );
};

const mapStateToProp = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProp)(Dashboard);
