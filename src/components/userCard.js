import React from "react";
import { Link } from "react-router-dom";

export default function UserCard(props) {
  const { user } = props;
  return (
    <>
      Name: {user.name}
      <br />
      Date Of Birth: {user.dob}
      <br />
      Phone Number: {user.phone}
      <br />
      <Link
        to={{
          pathname: `/users/${user.id}`,
          state: {
            userData: user,
          },
        }}
        onClick={(e) => props.onOpen(user.id)}
      >
        Details
      </Link>
      <br />
    </>
  );
}
