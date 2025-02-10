import { Box, Flex } from "@chakra-ui/react";
import EventCard from "./EventCard";

import prototypical2022_img from "../assets/prototypical2022_img.jpg";
import hackgteeny2025_img from "../assets/hackgteeny2025_img.jpg";
import hackgt11_img from "../assets/hackgt11_img.jpg";
import hackgtX_img from "../assets/hackgtX_img.jpg";
import hackgt9_img from "../assets/hackgt9_img.jpg";
import hackgt8_img from "../assets/hackgt8_img.jpg";
import hackgt7_img from "../assets/hackgt7_img.jpg";
import EventFilter from "./EventFilter";

import { EventInfo } from "../types";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const EVENTS: EventInfo[] = [
	/*
	{
		title: "HackGTeeny 2025",
		font: 'DM Sans Variable',
		date: "2025",
		bgImg: hackgteeny2025_img,
		link: "/hackgteeny-2025",
		eventType: 'HackGTeeny',
		dateBannerBg: '#5856d5',
		dateBannerColor: '#dccdf3',
	},
	*/
	{
		title: "HackGT 11",
		subtitle: "Circus of Invention",
		font: 'Horse Saguaro',
		date: "2024",
		bgImg: hackgt11_img,
		link: "/hackgt-11",
		eventType: 'HackGT',
		dateBannerBg: '#11ae14',
		dateBannerColor: 'white',
	},
	{
		title: "HackGT X",
		subtitle: "A Journal of Memories",
		font: 'DM Sans Variable',
		date: "2023",
		bgImg: hackgtX_img,
		link: "/hackgt-x",
		eventType: 'HackGT',
		dateBannerBg: '#524e4b',
		dateBannerColor: 'white',
	},
	{
		title: "HackGT 9",
		subtitle: "Retro Reset",
		font: 'DM Sans Variable',
		date: "2022",
		bgImg: hackgt9_img,
		link: "/hackgt-9",
		useWhiteText: true,
		eventType: 'HackGT',
		dateBannerBg: '#6517c4',
		dateBannerColor: 'white',
	},
	{
		title: "Prototypical 2022",
		subtitle: "THINK OUTSIDE THE BOX",
		font: 'DM Sans Variable',
		date: "2022",
		bgImg: prototypical2022_img,
		link: "/prototypical-2022",
		eventType: 'Prototypical',
		dateBannerBg: '#555',
		dateBannerColor: 'white',
		useWhiteText: true,
	},
	{
		title: "HackGT 8",
		subtitle: "Discover Your Craft",
		font: 'DM Sans Variable',
		date: "2021",
		bgImg: hackgt8_img,
		link: "/hackgt-8",
		useWhiteText: true,
		eventType: 'HackGT',
		dateBannerBg: '#fcce72',
		dateBannerColor: '#780909',
	},
	{
		title: "HackGT 7",
		subtitle: "Reimagine Reality",
		font: 'DM Sans Variable',
		date: "2020",
		bgImg: hackgt7_img,
		link: "/hackgt-7",
		useWhiteText: true,
		eventType: 'HackGT',
		dateBannerBg: '#045d81',
		dateBannerColor: 'white',
	},
]
const EVENT_TYPES = ['All', 'HackGT', 'HackGTeeny', 'Prototypical', 'Catalyst'];

const HomeRight = () => {

	const scrollerRef = useRef<HTMLDivElement>(null);

	const [currFilter, setCurrFilter] = useState('All');
	const [canScrollDown, setCanScrollDown] = useState(false);
	const [canScrollUp, setCanScrollUp] = useState(false);

	const getFilteredEvents = useCallback(() => {
		if (currFilter === 'All') return EVENTS;
		return EVENTS.filter((event) => event.eventType === currFilter);
	}, [currFilter]);

	const updateFadeouts = useCallback(() => {
		if (!scrollerRef.current) return;
		const el = scrollerRef.current;

		const isScrollable = el.scrollHeight > el.clientHeight;
		
		if (!isScrollable) {
			el.classList.remove('fade-bottom', 'fade-top');
			return;
		}

		const isScrolledToBottom = el.scrollHeight < el.clientHeight + el.scrollTop + 1;
		const isScrolledToTop = isScrolledToBottom ? false : el.scrollTop === 0;
		el.classList.toggle('fade-bottom', !isScrolledToBottom);
		el.classList.toggle('fade-top', !isScrolledToTop);
		setCanScrollDown(!isScrolledToBottom);
		setCanScrollUp(!isScrolledToTop);
	}, []);

	useEffect(() => {
		document.addEventListener('scroll', updateFadeouts);
		return () => document.removeEventListener('scroll', updateFadeouts);
	}, [updateFadeouts]);

	useEffect(updateFadeouts, [updateFadeouts, currFilter]);

	return (
		<Flex 
		direction="column" 
		mt='var(--main-margin-top)' 
		w="full" p={4} 
		backdropFilter="blur(10px)" 
		backgroundColor="#0002"
		borderRadius="var(--rounded)"
		border="1px solid #fff2">
			
			<EventFilter eventTypes={EVENT_TYPES} selected={currFilter} setSelected={setCurrFilter} />
			
			<Box w="full" h="full" overflow='hidden' position="relative">
				<Flex 
				ref={scrollerRef}
				onScroll={updateFadeouts}
				w='full'
				h='full'
				className="event-card-scroller">
					{getFilteredEvents().map((event, i) => <EventCard key={i} {...event} />)}
				</Flex>

				<ChevronDown 
					size={32}
					style={{opacity: canScrollDown ? 1 : 0}}
					className="scroll-down-icon" />

				<ChevronUp
					size={32}
					style={{opacity: canScrollUp ? 1 : 0}}
					className="scroll-up-icon" />
			</Box>

		</Flex>
	);
};

export default HomeRight;