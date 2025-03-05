import { Box, Link, Text } from "@chakra-ui/react";
import { EventInfo } from "../types";
import '../styles/eventCard.css';

const textColors = ['white', '#223'];

const EventCard = (event: EventInfo) => {	
	const textColor = textColors[event.useWhiteText? 0 : 1];
	const textShadowColor = event.useWhiteText? '#223' : '#ddf';
	
	return (
		<Link href={event.link} className="event-card-wrapper">
			<Box className="event-card">

				<Box bgColor={event.accentColorBg} className="event-card-year-bold">
					<span style={{'color': event.accentColorFg}}>{event.year}</span>
				</Box>

				<Box
				bgImage={`url(${event.bgImg})`} 
				bgPos={event.bgPosition || '100% 100%'}  
				className="event-card-content">
					<Text color={textColor} textShadow={`2px 1px ${textShadowColor}`} className='event-card-title'>{event.title}</Text>
					<Text color={textColor} textShadow={`2px 1px ${textShadowColor}`} className='event-card-subtitle'>{event.subtitle}</Text>
				</Box>
			
			</Box>
		</Link>
	);
};

export default EventCard;