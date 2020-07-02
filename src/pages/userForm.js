import React, { Component } from "react";

import * as formServices from "./../services/form";
import * as userServices from "./../services/user";

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      fields: [],
      name: "",
      gender: "",
      phone: "",
      email: "",
      address: "",
      nationality: "",
      dob: "",
      edBackground: "",
      modeOfContact: "",
    };
  }

  getFormFields() {
    formServices.getFormFields().then((response) => {
      console.log(response.data);
    });
  }

  onSubmitClicked(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      gender: this.state.gender,
      phone: this.state.phone,
      email: this.state.email,
      address: this.state.address,
      nationality: this.state.nationality,
      dob: this.state.dob,
      edBackground: this.state.edBackground,
      modeOfContact: this.state.modeOfContact,
    };
    userServices
      .createNewUser(data)
      .then((res) => console.log("the user was added"));
    console.log("data>>", data);
  }

  onNameChanged = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onGenderSelect = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  onPhoneChanged = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  onEmailChanged = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onAddressChanged = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  onNationalityChanged = (event) => {
    this.setState({
      nationality: event.target.value,
    });
  };

  onDobChange = (event) => {
    this.setState({
      dob: event.target.value,
    });
  };

  onEducationChange = (event) => {
    this.setState({
      edBackground: event.target.value,
    });
  };

  selectModeOfContact = (event) => {
    this.setState({
      modeOfContact: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div>Create form</div>
        <div className="modal__content">
          <div className="modal__body">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter title..."
                id="name"
                value={this.state.name}
                onChange={this.onNameChanged}
              />
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                onClick={(e) => this.onGenderSelect(e)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              <label htmlFor="phone">Phone number:</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter content..."
                id="phone"
                value={this.state.phone}
                onChange={this.onPhoneChanged}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter content..."
                id="email"
                value={this.state.email}
                onChange={this.onEmailChanged}
              />
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                name="address"
                placeholder="Enter content..."
                id="address"
                value={this.state.address}
                onChange={this.onAddressChanged}
              />
              <label htmlFor="nation">Nationality:</label>
              <input
                type="text"
                name="nation"
                placeholder="Enter content..."
                id="nation"
                value={this.state.nationality}
                onChange={this.onNationalityChanged}
              />
              <label htmlFor="dobb">Date of Birth:</label>
              <input
                type="text"
                name="dob"
                placeholder="YYYY/MM/DD"
                id="dob"
                value={this.state.dob}
                onChange={this.onDobChange}
              />
              <label htmlFor="dobb">Education Background:</label>
              <input
                type="text"
                name="ed"
                placeholder="education background"
                id="ed"
                value={this.state.edBackground}
                onChange={this.onEducationChange}
              />
              <label htmlFor="contact">Mode of Contact:</label>
              <select
                id="contact"
                name="contact"
                onClick={(e) => this.selectModeOfContact(e)}
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="modal__footer">
            <button className="btn " onClick={(e) => this.onSubmitClicked(e)}>
              Add User
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default UserForm;
