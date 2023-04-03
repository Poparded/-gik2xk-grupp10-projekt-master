import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';

function UserList({ user }) {
    console.log(user);
    return (
        <>
            <Link to={`/users/rating/${user.id}`}>
                <Typography>
                    {user.first_name} {user.last_name}
                </Typography>
                <Typography>{user.email}</Typography>
            </Link>
        </>
    );
}

export default UserList;


