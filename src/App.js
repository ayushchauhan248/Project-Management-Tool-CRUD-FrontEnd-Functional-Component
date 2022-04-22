import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthRoute from "./pages/auth/AuthRoute";
import AppRoute from "./pages/app/AppRoute";
import NotFoundPage from "./pages/NotFoundPage";
import React from "react";

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
        </Route>

        <Route path={["/login", "/signup"]} exact>
          <AuthRoute></AuthRoute>
        </Route>

        <Route
          path={[
            "/dashboard",
            "/create",
            "/delete",
            "/myprofile",
            "/project/:id",
            "/edit/:id",
          ]}
          exact
        >
          <AppRoute></AppRoute>
        </Route>

        <Route>
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);
export default App;
