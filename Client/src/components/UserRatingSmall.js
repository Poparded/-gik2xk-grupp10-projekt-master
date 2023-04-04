import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';

export function UserRatingSmall({ rating }) {
    return (
        <>
            <Typography variant="subtitle1">
                <div>Titel: {rating.title}</div>
            </Typography>

            <Typography variant="body1">
                <div>Användar-id: {rating.userId}</div>
            </Typography>

            <Typography variant="body1">
                <div>Betyg: {rating.rating}</div>
            </Typography>

            <Typography variant="body1">
                <div>Produkt-id: {rating.productId}</div>
            </Typography>

            <Typography variant="body1">
                <div>Skapat vid: {rating.createdAt}</div>
            </Typography>
        </>
    );
}

export default UserRatingSmall;
