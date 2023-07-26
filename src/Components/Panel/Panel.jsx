import React, { useContext } from "react";
import "./Panel.css";
import { ThemeContext } from "../Context/Context";

const Panel = ({ title, children }) => {
  const theme = useContext(ThemeContext);

  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Panel;
