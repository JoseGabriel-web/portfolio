import screens from "@assets/data/screens";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import "@sass/main.scss";
import { v4 as uuid } from "uuid";

const App = () => {
  return (
    <Layout>
      <Switch>
        {screens.map(({ path, Component, exact }) => (
          <Route key={uuid()} exact={exact} path={path}>
            <Component key={uuid()} />
          </Route>
        ))}
      </Switch>
    </Layout>
  );
};

export default App;
