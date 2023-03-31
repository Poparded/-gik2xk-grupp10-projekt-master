import { Typography } from "@mui/material";

function UserList({ user }) {
    return (
        <>
            <Typography>
                {user.firstName} {user.lastName}
            </Typography>
            <Typography>{user.email}</Typography>
        </>
    );
}

export default UserList;
