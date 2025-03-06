import { Box, Container, Flex } from "@chakra-ui/react";
import Title from "../components/Title";
import EventsList from "../components/EventsList";

import '../styles/home.css';
import BgAttribution from "../components/BgAttribution";

// cool af home page (i need a cool graphic or something pls)
const Homepage = () => {
	return (
		<Container className="home-bg">
			<Box 
			height="full"
			backgroundImage={{base: 'linear-gradient(to bottom, #0009, transparent 50%)', xl: 'linear-gradient(to right, #0004, #0001 50%)'}}
			className="home-bg-overlay">
				<Box className="idk-why-scroll-isnt-working-but-this-fixes-it">
					<Flex 
					h={{base: 'fit-content', xl: '100%'}}
					direction={{ base: 'column', xl: 'row' }} 
					gap={{base: 0, xl: 'min(2rem, 10%)'}}
					pb={{base: 'var(--main-margin-top)', xl: 'min(2%, 1rem)'}}
					className="homepage-container">
						<BgAttribution />
						<Title />	
						<EventsList />
					</Flex>
				</Box>
			</Box>
		</Container>
	);
};

export default Homepage;