import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserRatingSmall } from '../components/UserRatingSmall';
import { getRatingByUser } from '../models/UserModel';
import { Typography } from "@mui/material";

function UserRating() {
    const params = useParams();
    const id = params.id;
    const [ratings, setRatings] = useState([]);
    console.log(id);
    useEffect(() => {
        getRatingByUser(id).then((ratings) => setRatings(ratings));
    }, [id]);
    console.log(ratings)

    return (
        <>
            <div>
                {ratings.map((rating) => (
                    <li key={`rating-${rating.id}`}>
                        <UserRatingSmall rating={rating} />

                    </li>
                ))}
            </div>
        </>
    );
}

export default UserRating;
