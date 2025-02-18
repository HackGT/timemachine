import { Box, Link, Text } from "@chakra-ui/react";
import { EventInfo } from "../types";
import '../styles/eventCard.css';

const EventCard = ({title, subtitle, font, bgImg, date, link, useWhiteText, dateBannerBg, dateBannerColor}: EventInfo) => {
	
	const textColor = useWhiteText? "white" : "black";
	
	return (
		<Link href={link} className="event-card-wrapper">
			<Box className="event-card" bgImage={`url(${bgImg})`}>
				<Box className="event-card-content">
					<Text color={dateBannerColor} bgColor={dateBannerBg} className="event-card-date-banner">{date}</Text>
					{/*<Image ml="1rem" py="0.5" src={testSVG} h='3rem' />*/}
					<Text mx="1rem" wordWrap="break-word" color={textColor} fontSize="3xl" fontWeight={700} >{title}</Text>
					<Text mx="1rem" wordWrap="break-word" color={textColor} fontSize="sm">{subtitle}</Text>
				</Box>
			</Box>
		</Link>
	);
};

export default EventCard;