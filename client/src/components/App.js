import React, { useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

const App = (actions) => {
  //   componentDidMount() {
  useEffect(() => {
    actions.fetchUser();
  }, []);
  // console.log(this.props);

  //   render() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/surveys" component={Dashboard}></Route>
          <Route path="/surveys/new" component={SurveyNew}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};
// }

export default connect(null, actions)(App);
