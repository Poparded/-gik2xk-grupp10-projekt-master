import { useEffect, useState } from 'react';
import { getAllUsers } from "../models/UserModel"
import UserSmall from "./UserSmall"


function UserList() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    getAllUsers().then((users) => setUsers(users));
  }, []);


  console.log(users);


  /*useEffect(() => {
    getAll().then((users) => setUsers(users));
  }, []);*/
  /*return (
    <ul>
      {users &&
        users.map((user) => {
          return (
            <li key={`user_${user.id}`}>
              <UserSmall style={{ marginBottom: '1rem' }} user={user} />
            </li>
 
          );
        })}
    </ul>
  );*/
}

export default UserList;
