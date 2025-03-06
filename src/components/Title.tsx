import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";

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

const Title = () => {
	return (
		<Flex 
		maxW={{base: '100%', xl: '40%'}} 
		position={{base: 'relative', xl: 'sticky'}}
		pt={{base: '4rem', xl: '4rem'}}
		top='0' 
		direction='column' 
		alignItems={{base: 'center', xl: 'flex-start'}}
		justifyContent={'center'} gap={8} mb={{base: 16, xl: 0}}>

			<Link href="https://hexlabs.org">
				<Image src={dropshadowLogo} className="home-logo" alt="logo" />
			</Link>

			<Box className="homepage-title">
				<Box className="homepage-title-L" textAlign={{base: 'center', xl: 'left'}}>HackGT/</Box>
				<Box className="homepage-title-R">archive</Box>
			</Box>

			<Box>
				<Text fontSize="min(18px, 5vw)" fontWeight={600} className="shadowed-text" textAlign={{base: 'center', xl: 'left'}}>
					A collection of all past HackGT events, dating all the way back to our creation in 2014!
				</Text>
			</Box>

			<Box mx="auto">
				<Text fontSize={14} color='#fffc' textShadow="0.05em 0.05em 0 black" textAlign={'center'} mb={2}>
					More from HexLabs!
				</Text>
				<Flex gap={4} flexWrap='wrap' justifyContent='center'>
					{LINKS.map((link, i) => <LinkIcon key={i} {...link} />)}
				</Flex>
			</Box>
			
		</Flex>
	);
};

export default Title;