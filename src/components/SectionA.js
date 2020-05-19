import React from "react";
import Title from "./atomic/Title";

const SectionA = ({ title, subtitle }) => {
  return (
    <section>
      <Title isBold={true}>{title}</Title>
      <h2>{subtitle}</h2>
    </section>
  );
};

export default SectionA;
