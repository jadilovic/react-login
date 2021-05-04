import React, { useContext } from "react";
import { connect } from "react-redux";
//import { Info, Repos, User, Search, Navbar } from "../components";
//import loadingImage from "../images/preloader.gif";
//import { GithubContext } from "../context/context";
const Dashboard = ({ data = [] }) => {
  /*
  const { isLoading } = useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Navbar></Navbar>
        <Search></Search>
        <img src={loadingImage} alt="loading" className="loading-img" />
      </main>
    );
  }
*/
  return (
    <main>
      <h1>Dashboard</h1>

      {data.map((item) => {
        return <p>{item.description}</p>;
      })}
      {/* 
    <Navbar></Navbar>
    <Search></Search>
     <Info></Info>
     <User></User>
    <Repos></Repos> */}
    </main>
  );
};

const mapStateToProp = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProp)(Dashboard);
