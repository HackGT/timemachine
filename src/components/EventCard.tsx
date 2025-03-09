import { Box, Link, Text } from "@chakra-ui/react";
import { EventInfo } from "../types";
import '../styles/eventCard.css';

const EventCard = (event: EventInfo) => {	

	console.log(`${event.bgImg}`)
	
	return (
		<Link 
		href={event.link} 
		className="event-card-wrapper">
			<Box className="event-card">

				<Box 
				fontSize={{base: 'min(8vw, 3.2rem)', xl: '4rem'}}
				lineHeight={{base: 'unset', xl: '1.2'}}
				bgColor={event.colors.yearBgColor}
				className="event-card-year-bold">
					<span style={{
					color: event.colors.yearTextColor, 
					textShadow: `0.06em 0.03em ${event.colors.yearShadowColor}`}}>
						{event.year}
					</span>
				</Box>

				<Box
				bgImage={`url(${event.bgImg})`}
				bgSize={'cover'}
				bgRepeat={'no-repeat'}
				bgPos={event.bgPosition || '100% 100%'}
				className="event-card-content">

					<Text 
					fontSize={{base: 'min(8vw, 2.5rem)', xl: '3rem'}}
					color={event.colors.titleColor} 
					textShadow={`0.06em 0.03em ${event.colors.titleShadowColor}`} 
					className='event-card-title'>{event.title}</Text>

					<Text 
					fontSize={{base: 'min(3vw, 1.2rem)', xl: '1rem'}}
					color={event.colors.titleColor} 
					textShadow={`0.08em 0.08em ${event.colors.titleShadowColor}`} 
					className='event-card-subtitle'>{event.subtitle}</Text>
				</Box>
			
			</Box>
		</Link>
	);
};

export default EventCard;