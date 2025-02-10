import { Image, Link } from "@chakra-ui/react";

export interface LinkIconProps {
	icon: string,
	desc?: string; 
	link: string;
}

const LinkIcon = ({icon, desc, link}: LinkIconProps) => {
	return (
		<Link _active={{outline: 'none'}} _focus={{outline: 'none'}} href={link} target="_blank" rel="noreferrer">
			<Image className="link-icon" src={icon} alt={desc} />
		</Link>
	);
};

export default LinkIcon;