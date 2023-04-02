import { useEffect, useState } from 'react';
import { getAllUsers } from "../models/UserModel"
import UserSmall from "./UserSmall"
function UserList({ pathname }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers(pathname).then((users) => setUsers(users));
    }, [pathname]);


    return (
        <ul>

            {users &&
                users.map((product) => {
                    return (
                        <li key={`productId_${users.id}`} >
                            <UserSmall product={users} />
                        </li>
                    );
                })}
        </ul>
    );
}

export default UserList;