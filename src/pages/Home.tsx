import { Box, Container, Flex } from "@chakra-ui/react";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";

import '../styles/home.css';

// cool af home page (i need a cool graphic or something pls)
const Homepage = () => {
	return (
		<Container className="home-bg">
			<Box className="home-bg-overlay">
				<Flex direction={{ base: 'column', xl: 'row' }} className="homepage-container">
					<HomeLeft />	
					<HomeRight />
				</Flex>
			</Box>
		</Container>
	);
};

export default Homepage;