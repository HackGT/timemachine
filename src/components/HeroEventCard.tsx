import { Box, Image, Link } from "@chakra-ui/react";

import hackgt11_img from "../assets/hackgt11_img.jpg";

import '../styles/eventCard.css';

/* The special "main" event card, probably just the most recent event */
const HeroEventCard = () => {
	return (
		<Link href="/hackgt-11" className="event-card-wrapper">
			<Box className="hero-event-card">
				<Image borderRadius="0.5rem" src={hackgt11_img} alt="HackGT 11" />
			</Box>
		</Link>
	);
};

export default HeroEventCard;