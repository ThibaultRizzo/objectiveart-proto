import React from "react";
import Title from "./atomic/Title";

const SectionB = ({ title, subtitle, src }) => {
  return (
    <section>
      <Title isBold={false}>{title}</Title>
      <h2>{subtitle}</h2>
      <img src={src} alt={"Random image-" + title} />
    </section>
  );
};

export default SectionB;
