import React from "react";

import { Header, Projects, Contact } from "./container";
import { Nav } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default App;
