import React, { Component } from "react";

import * as userServices from "./../services/user";
import UserCard from "./../components/userCard";
export default class UserList extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      users: [],
    };
    this.onClickedOpen = this.onClickedOpen.bind(this);
  }

  componentWillMount() {
    this.getUserData();
  }

  getUserData() {
    userServices.getAllUsers().then((response) => {
      this.setState({
        users: response.data,
      });
    });
  }

  onClickedOpen(id) {
    userServices.getUserWithId(id).then((response) => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.users.map((user, index) => {
            return (
              <li key={index}>
                <UserCard user={user} onOpen={this.onClickedOpen} />
              </li>
            );
          })}
        </ul>
        {/* <UserCard /> */}
      </>
    );
  }
}
