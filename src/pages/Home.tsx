import { Box, Container, Flex } from "@chakra-ui/react";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";

import '../styles/home.css';

// cool af home page (i need a cool graphic or something pls)
const Homepage = () => {
	return (
		<Container className="home-bg">
			<Box 
			height="full"
			backgroundImage={{base: 'linear-gradient(to bottom, #0009, transparent 50%)', xl: 'linear-gradient(to right, #0004, transparent 50%)'}}
			className="home-bg-overlay">
				<Box className="idk-why-scroll-isnt-working-but-this-fixes-it">
					<Flex 
					h={{base: 'fit-content', xl: '100%'}}
					direction={{ base: 'column', xl: 'row' }} 
					gap={{base: 0, xl: 'min(2rem, 10%)'}}
					pb={{base: 'var(--main-margin-top)', xl: 'min(2%, 1rem)'}}
					className="homepage-container">
						<HomeLeft />	
						<HomeRight />
					</Flex>
				</Box>
			</Box>
		</Container>
	);
};

export default Homepage;