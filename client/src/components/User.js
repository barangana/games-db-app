import React from "react";

function User({ user }) {
  return (
    <div>
      <h1>{user.username}</h1>
    </div>
  );
}

export default User;
