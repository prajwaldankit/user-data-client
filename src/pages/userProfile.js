import React, { Component } from "react";
import { getUserWithId } from "./../services/user";

export default class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    getUserWithId(this.props.match.params.id).then((response) =>
      this.setState({
        user: response.data,
      })
    );
  }
  render() {
    return (
      <>
        <div>
          <h1>User Details</h1>
          Name: {this.state.user.name}
          <br />
          Id: {this.state.user.id}
          <br />
          gender: {this.state.user.gender}
          <br />
          phone: {this.state.user.phone}
          <br />
          email: {this.state.user.email}
          <br />
          address: {this.state.user.address}
          <br />
          nationality: {this.state.user.nationality}
          <br />
          dob: {this.state.user.dob}
          <br />
          edBackground: {this.state.user.edbackground}
          <br />
          modeOfContact: {this.state.user.modeOfContact}
        </div>
      </>
    );
  }
}
