import { useState, useEffect } from "react";
import Axios from "axios";
import User from "./User";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("/user/users").then((response) => {
      setUsers(response.data);
      // console.log(response);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
}

export default Users;
