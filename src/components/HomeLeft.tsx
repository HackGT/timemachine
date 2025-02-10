import { Box, Flex, Image, Text } from "@chakra-ui/react";

import dropshadowLogo from '../assets/shadowed_logo.png';
import LinkIcon, { LinkIconProps } from "./LinkIcon";

import hexlabsIcon from '../assets/hexlabs_logo.svg';
import discordIcon from '../assets/discord_logo.png';
import twitterIcon from '../assets/x_logo.png';
import instagramIcon from '../assets/instagram_logo.svg';
import facebookIcon from '../assets/facebook_logo.png';
import linkedinIcon from '../assets/linkedin_logo.png';
import githubIcon from '../assets/github_logo.png';

const LINKS: LinkIconProps[] = [
	{
		icon: hexlabsIcon,
		desc: 'HexLabs Website',
		link: 'https://hexlabs.org'
	},
	{
		icon: discordIcon,
		desc: 'Hexlabs Discord',
		link: 'https://discord.hexlabs.org'
	},
	{
		icon: twitterIcon,
		desc: 'Twitter',
		link: 'https://twitter.com/TheHexLabs'
	},
	{
		icon: instagramIcon,
		desc: 'Instagram',
		link: 'https://www.instagram.com/thehexlabs/'
	},
	{
		icon: facebookIcon,
		desc: 'Facebook',
		link: 'https://www.facebook.com/TheHexLabs'
	},
	{
		icon: linkedinIcon,
		desc: 'LinkedIn',
		link: 'https://www.linkedin.com/company/thehexlabs/'
	},
	{
		icon: githubIcon,
		desc: 'GitHub',
		link: 'https://github.com/HackGT'
	}
]

const HomeLeft = () => {
	return (
		<Flex 
		maxW={{base: '100%', xl: '40%'}} 
		position={{base: 'relative', xl: 'sticky'}}
		padding="var(--main-margin-top) 0"
		top='0' 
		direction='column' 
		justifyContent={'center'} gap={8}>

			<Image src={dropshadowLogo} className="home-logo" alt="logo" />
			
			<Box className="homepage-title">
				<Box className="homepage-title-L">HackGT/</Box>
				<Box className="homepage-title-R">archive</Box>
			</Box>

			<Box>
				<Text fontSize={18} fontWeight={600} className="shadowed-text">
					A collection of all past HackGT events, dating all the way back to our creation in 2014!
				</Text>
			</Box>

			<hr style={{borderColor: '#fff8'}} />

			<Box>
				<Text fontSize={14} color='#fffa' textAlign={'center'} mb={2}>
					More from HexLabs!
				</Text>
				<Flex gap={4} justifyContent='center'>
					{LINKS.map((link, i) => <LinkIcon key={i} {...link} />)}
				</Flex>
			</Box>
			
		</Flex>
	);
};

export default HomeLeft;