import { Box, Container, Flex } from "@chakra-ui/react";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";

// cool af home page (i need a cool graphic or something pls)
const Homepage = () => {
	return (
		<Container maxW='container.xl'>
			<Flex>
				<HomeLeft />
				<HomeRight />
			</Flex>
		</Container>
	);
};

export default Homepage;