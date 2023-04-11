import { Typography, Button, Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

function DisplayRating({ rating }) {


    return (<>
        <ul>
            <li key={`productId_${rating.id}`}>


                <div>
                    <Typography variant="h5" component="h3">
                        {`productId_${rating.id}`}
                    </Typography>
                    <Typography> {`rating ${rating.title}`}</Typography>
                    <br />
                    <Typography variant="h5" component="h3">
                        {`rating:  ${rating.rating}`}</Typography>







                </div>
            </li>
        </ul>

    </>)
}
export default DisplayRating;
