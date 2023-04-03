import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';

export function UserRatingSmall({ rating }) {
    console.log();
    return (
        <>                <Typography>

            <div>{`rating ${rating.title}`}</div>
        </Typography>

            <Typography><div>{`rating ${rating.rating}`}</div>         </Typography>

            <Typography>   <div> {`rating${rating.rating}`}</div>   </Typography>
        </>
    );
}

export default UserRatingSmall;
