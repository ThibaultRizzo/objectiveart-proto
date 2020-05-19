import React from "react";
import "./title.css";

const Title = ({ isBold, children }) => {
  let className = "title";
  if (isBold) {
    className = className + " title--bold";
  }
  return <h1 className={className}>{children}</h1>;
};

export default Title;
