import { Typography } from "@mui/material";

function UserList({ user }) {
    console.log(user);
    return (
        <>
            <Typography>
                {user.first_name} {user.last_name}
            </Typography>
            <Typography>{user.email}</Typography>
        </>
    );
}

export default UserList;


