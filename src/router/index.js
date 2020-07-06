import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import AboutMeScreen from "../screens/AboutMeScreen";
import ContactsScreen from "../screens/ContactsScreen";
import MainScreen from "../screens/MainScreen";
import ProjectScreen from "../screens/ProjectsScreen";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Route exact path="/" component={() => <MainScreen />} />
      <Route path="/about-me" component={() => <AboutMeScreen />} />
      <Route path="/projects" component={() => <ProjectScreen />} />
      <Route path="/contacts" component={() => <ContactsScreen />} />
    </HashRouter>
  );
};

export default Router;
