import { Box, Link, Text } from "@chakra-ui/react";
import { EventInfo } from "../types";
import '../styles/eventCard.css';

const textColors = ['white', 'black'];

const EventCard = (event: EventInfo) => {	
	const textColor = textColors[event.useWhiteText? 0 : 1];
	const textShadowColor = event.useWhiteText? 'black' : 'transparent';
	
	return (
		<Link href={event.link} className="event-card-wrapper">
			<Box 
			className="event-card" 
			bgImage={`url(${event.bgImg})`} 
			bgPos={event.bgPosition || 'center'} 
			borderImage={`linear-gradient(to bottom, ${event.dateBannerBg}, transparent) 0 100%`}
			boxShadow={`8px 8px 0 0 ${event.dateBannerBg}`}>
				<Box className="event-card-content">
					<Text color={event.dateBannerColor} bgColor={event.dateBannerBg} className="event-card-date-banner">{event.year}</Text>
					{/*<Image ml="1rem" py="0.5" src={testSVG} h='3rem' />*/}
					<Text mx="1rem" wordWrap="break-word" color={textColor} textShadow={`2px 1px ${textShadowColor}`} fontSize="3xl" fontWeight={700}>{event.title}</Text>
					<Text mx="1rem" wordWrap="break-word" color={textColor} fontSize="sm">{event.subtitle}</Text>
				</Box>
			</Box>
		</Link>
	);
};

export default EventCard;