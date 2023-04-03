import { useEffect, useState } from 'react';
import { getAllUsers, getRatingByUser } from "../models/UserModel"
import UserSmall from "./UserSmall"


function UserList() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    getAllUsers().then((users) => setUsers(users));
  }, []);





  return (
    <ul>
      {
        users &&
        users.map((user) => {
          return (
            <li key={user.id}>

              <UserSmall style={{ marginBottom: '1rem' }} user={user} />
            </li>

          );
        })}
    </ul>
  );
}

export default UserList;
