import React from "react";

import { Header, Projects, Contact } from "./container";
import { Nav } from "./components";
import "./App.scss";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
