import React from "react";
import "./Preloader.scss";

function Preloader({ load = false }) {
  return <div id={load ? "preloader" : "preloader-none"} />;
}

export default Preloader;
