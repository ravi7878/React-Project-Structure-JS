import React, { useEffect } from "react";
import "./Home.css";
import DemoImg from "assets/alert.png";
import Api from "apirequests/FetchDataApi";
export const Home = (props) => {
  useEffect(async () => {
    const results = await Api.getAllCountries();
    console.log("results", results);
  }, []);
  return <div>Home</div>;
};

export default Home;
