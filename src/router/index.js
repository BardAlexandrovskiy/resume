import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "../components/Header";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Route exact path="/" component={() => <div>Main</div>} />
      <Route path="/about-me" component={() => <div>About me</div>} />
      <Route path="/projects" component={() => <div>Projects</div>} />
      <Route path="/contacts" component={() => <div>Contacts</div>} />
    </HashRouter>
  );
};

export default Router;
