import { Typography } from "@mui/material";

function UserList({ users }) {
    return (
        <>
            <Typography>
                {users.firstName} {users.lastName}
            </Typography>
            <Typography>{users.email}</Typography>
        </>
    );
}

export default UserList;


