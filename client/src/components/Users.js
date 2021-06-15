import { useState } from "react";
import Axios from "axios";

function Users() {
  const [users, setUsers] = useState();

  Axios.get("/user/users").then((response) => {
    console.log(response.data);
    setUsers(response.data);
  });

  return <div>{}</div>;
}

export default Users;
