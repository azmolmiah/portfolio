import React from "react";

import { Header, Projects, Contact } from "./container";
import { Nav, Shapes } from "./components";
import "./App.scss";

const App = () => {
  return (
    <>
      <Shapes />
      <Nav />
      <Header />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
