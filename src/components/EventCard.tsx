import { Box, Link, Text } from "@chakra-ui/react";
import { EventInfo } from "../types";
import '../styles/eventCard.css';
import React from "react";

/** Some of the card names get rlly long so we should
 * scale them down (esp on small screens, they tend to 
 * collide with the year badge thing) */
function scaleFontSize(titleLen: number, baseSize: number) {
	const threshold = 15;
	if (titleLen <= threshold) return baseSize * getFontsizeScaleDueToScreenWidth(); // no scaling needed
	return getFontsizeScaleDueToScreenWidth() * threshold*baseSize / (titleLen);
}

/** Returns a scale factor that will ALWAYS BE 0<n<=1 
 * based on how wide the screen currently is. this is mostly
 * for small screens cuz again we have the event title colliding
 * with the year badge issue. uhh idk if theres a better way to do this lol */
function getFontsizeScaleDueToScreenWidth() {
	const screenWidth = window.innerWidth;

	if (screenWidth >= 480) { return 1; } // everythings fine above this

	return screenWidth / 480;
}

/** gets the pixel value for use in `clip-path` for the year badge.
 * We cant set this to a static fixed or percentage value beacuse
 * the relative proportion in height changes, and the ANGLE needs
 * to be the same in order for it to look good. so we have to compute dynamically lol
 */
function getSlopeOfYearBadge(badgeEle: HTMLDivElement|null, containerEle: HTMLDivElement|null): string | null {

	if (!badgeEle || !containerEle) return null;

	const badgeHeight = badgeEle.clientHeight;
	const containerHeight = containerEle.clientHeight;

	// get css variable value & parse value (hopefully it ends in either `px` or `em`...)
	const clipDiagSlopeStr = getComputedStyle(containerEle).getPropertyValue('--clip-diag-slope');
	const clipDiagSlope = parseFloat(clipDiagSlopeStr.substring(0, clipDiagSlopeStr.length-2));

	return `${clipDiagSlope * (badgeHeight / containerHeight)}px`;
}

//////////////////////////////////////////////////////////////////////
const EventCard = (event: EventInfo) => {	

	const containerRef = React.useRef<HTMLDivElement>(null);
	const badgeRef = React.useRef<HTMLDivElement>(null);
	
	return (
		<Link 
		href={event.link} 
		className="event-card-wrapper">
			<Box className="event-card" ref={containerRef}>

				<Box 
				ref={badgeRef}
				fontSize={{base: 'min(8vw, 3.2rem)', xl: '4rem'}}
				lineHeight={{base: 'unset', xl: '1.2'}}
				bgColor={event.colors.yearBgColor}
				clipPath={`polygon(
					${getSlopeOfYearBadge(badgeRef.current, containerRef.current) || 'var(--clip-diag-slope)'} 0, 
					calc(100%) 0, 
					calc(100% - ${getSlopeOfYearBadge(badgeRef.current, containerRef.current) || 'var(--clip-diag-slope)'}) 100%, 
					0 100%
				);`}	
				className="event-card-year-bold">
					<span style={{
					color: event.colors.yearTextColor, 
					textShadow: `0.05em 0.025em ${event.colors.yearShadowColor}`}}>
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
					fontSize={{base: `min(8vw, ${scaleFontSize(event.title.length, 2.5)}rem)`, xl: '3rem'}}
					color={event.colors.titleColor} 
					textShadow={`0.05em 0.025em ${event.colors.titleShadowColor}`} 
					className='event-card-title'>{event.title}</Text>

					<Text 
					fontSize={{base: 'min(3vw, 1.2rem)', xl: '1rem'}}
					color={event.colors.titleColor} 
					textShadow={`0.07em 0.07em ${event.colors.titleShadowColor}`} 
					className='event-card-subtitle'>{event.subtitle}</Text>
				</Box>
			
			</Box>
		</Link>
	);
};

export default EventCard;