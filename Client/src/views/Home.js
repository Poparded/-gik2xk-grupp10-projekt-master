import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import "./Home.css";

function Home() {
    useEffect(() => {
        const toolbar = document.getElementById("toolbar");
        const description = document.getElementById("description");

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 0) {
                toolbar.style.transform = "translateY(" + scrollTop + "px)";
                description.style.opacity = 0.5; // Adjust the opacity as desired
            } else {
                toolbar.style.transform = "translateY(0)";
                description.style.opacity = 1;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Grid container spacing={2} className="home-container">
            <div id="toolbar">
                <div id="message">
                    <span id="message-icon">📢</span>
                    <Typography variant="body1" component="p" id="description">
                        Välkommen till "Fjäll ripan" – din ultimata webbplats för vandring och fjälläventyr! Vi har allt du behöver för att erövra topparna och utforska dalgångarna. Från vandringsskor till ryggsäckar och kläder – vår samling är sagolik! Dessutom erbjuder vi praktiska tillbehör för att göra dina äventyr roliga och säkra. Tveka inte, utforska vår hemsida och bli inspirerad. Välkommen till "Fjäll ripan" där fjällen blir magi och äventyr!
                    </Typography>
                </div>
            </div>
            <Grid item xs={12}>
                <Box mt={3}>
                    <Typography variant="h4" component="h1" align="center" className="wavy-text">
                        För dig som älskar att vandra!
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box mt={3} display="flex" justifyContent="center">
                    <img src="/stockImages/tent.png" alt="Tent" />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box mt={3} display="flex" justifyContent="flex-end">
                    <Typography variant="body1" component="p">

                        <a href="mailto:h19munaz@du.se" style={{ color: 'red', marginLeft: 5 }}>Kontakta oss via mail</a>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Home;
