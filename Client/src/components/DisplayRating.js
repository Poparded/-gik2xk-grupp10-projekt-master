import { Typography, Box, Container } from "@mui/material";

function DisplayRating({ rating }) {
    return (
        <Container sx={{ backgroundColor: "#f5f5f5", padding: "16px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="subtitle1" sx={{ marginBottom: "8px" }}>
                    Titel: {rating.title}
                </Typography>


                <Typography variant="body1" sx={{ marginBottom: "4px" }}>
                    Användar-id: {rating.userId}
                </Typography>

                <Typography variant="body1" sx={{ marginBottom: "4px" }}>
                    Betyg: {rating.rating}
                </Typography>

                <Typography variant="body1" sx={{ marginBottom: "4px" }}>
                    Produkt-id: {rating.productId}
                </Typography>

                <Typography variant="body1" sx={{ marginBottom: "4px" }}>
                    Skapat vid: {rating.createdAt}
                </Typography>
            </Box>
        </Container>
    );
}

export default DisplayRating;