import React from "react";
import "./App.css";
import state from "./state";

const Page = ({ page: { type, sections } }) => {
  return (
    <div>
      {sections.map((section, index) => {
        const Compo = require(`./components/${section.component}`).default;
        return <Compo {...section.data} key={section.component + index} />;
      })}
    </div>
  );
};

function App() {
  return (
    <div>
      {state.pages.map((page, index) => (
        <Page page={page} key={"page-" + index} />
      ))}
    </div>
  );
}

export default App;
