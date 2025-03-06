import { Box } from '@chakra-ui/react';

const BgAttribution = () => {
	return (
		<Box 
		position="absolute"
		left="1em" 
		bottom={{base: "unset", xl: "1em"}}
		top={{base: "1em", xl: "unset"}}
		zIndex={500} 
		fontSize="min(1vw, 0.5rem)" 
		color="#fff4">
			Background Image Attribution: Vecteez - <a className="uline-on-hover" href="https://www.vecteezy.com/free-vector/cartoon">Cartoon Vectors by Vecteezy</a>
		</Box>
	);
};

export default BgAttribution;