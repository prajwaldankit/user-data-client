import React, { Component } from "react";
import * as userServices from "./services/user";
import CreateUser from "./pages/userForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  getUserData() {
    userServices.getAllUsers().then((response) => {});
  }

  getUserWithId() {
    userServices.getUserWithId("2").then((response) => {});
  }

  render() {
    return (
      <div className="App">
        <CreateUser />
      </div>
    );
  }
}

export default App;
