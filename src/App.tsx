import screens from "@assets/data/screens";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import "./locomotive-scroll.css";
import "@sass/main.scss";
import { useState } from "react";

const App = () => {  

  return (
      <Layout>
        <Switch>
          {screens.map(({ path, Component, exact }) => (
            <Route key={JSON.stringify(Component)} exact={exact} path={path}>
              <Component key={JSON.stringify(Component) + "1"} />
            </Route>
          ))}
        </Switch>
      </Layout>
  );
};

export default App;
