import React from "react";
import { Box, Stack, Typography,Button } from "@mui/material";

import HeroBannerImage from "../assets/images/gym5.jpg";


const HeroBanner = () => (
	<Box
		sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
		position="relative"
		p="20px"
	>
		<Typography
			color="#f21a0a"
			fontFamily="Bebas Neue"
			fontWeight="600"
			fontSize="60px"
		>
			Fuel-Fitness
		</Typography>
		<Typography
			color="#f21a0a"
			fontFamily="Bebas Neue"
			fontWeight={700}
			sx={{ fontSize: { lg: "44px", xs: "40px" } }}
			mb="20px"
			mt="30px"
		>
			NO PAIN <br />
			NO GAIN
		</Typography>
		<Typography
			color="#d54136"
			fontSize="22px"
			fontFamily="Bebas Neue"
			lineHeight="35px"
			mb={15}
		>
			Check out the most effective exercises personalized to you
		</Typography>
		<Button variant="outlined" color="error">
			Learn More
		</Button>
		<Typography
			fontWeight={600}
			color="#d54136"
			sx={{
				opacity: "0.1",
				display: { lg: "block", xs: "none" },
				fontSize: "200px",
			}}
		>
			Exercise
		</Typography>
		<img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
	</Box>
);

export default HeroBanner;

 <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>