import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserList from "./pages/userList";
import UserForm from "./pages/userForm";
import UserProfile from "./pages/userProfile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isShowingList: true,
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={["/home", "/users", "/"]}>
            {(props) => {
              return <UserList {...props} />;
            }}
          </Route>
          <Route exact path="/users/create">
            {(props) => {
              return <UserForm {...props} />;
            }}
          </Route>
          <Route path="/users/:id">
            {(props) => {
              return <UserProfile {...props} />;
            }}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
