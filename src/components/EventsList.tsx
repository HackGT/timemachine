import { Box, Flex } from "@chakra-ui/react";
import EventCard from "./EventCard";

// import EventFilter from "./EventFilter";

import { EventInfo } from "../types";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// ========================================================
//
// ADDING NEW EVENTS:
// use this json file to add past events !!!!
//
import _events from '../content/links.json';
const EVENTS: EventInfo[] = _events.sort((a, b) => b.year - a.year); // sort by year, descending so recent is at top
/* const EVENT_TYPES = (() => {
	const event_types = new Set<string>(EVENTS.map((event) => event.eventType));
	return ["All", ...event_types];
})(); */
// ========================================================

const EventsList = () => {

	const scrollerRef = useRef<HTMLDivElement>(null);

	// const [currFilter, setCurrFilter] = useState('All');
	const [canScrollDown, setCanScrollDown] = useState(false);
	const [canScrollUp, setCanScrollUp] = useState(false);

	/* const getFilteredEvents = useCallback(() => {
		if (currFilter === 'All') return EVENTS;
		return EVENTS.filter((event) => event.eventType === currFilter);
	}, [currFilter]); */

	const updateFadeouts = useCallback(() => {
		if (!scrollerRef.current) {
			return;
		};
		const el = scrollerRef.current;

		const isScrollable = el.scrollHeight > el.clientHeight;
		
		if (!isScrollable) {
			el.classList.remove('fade-bottom', 'fade-top');
			setCanScrollDown(false);
			setCanScrollUp(false);
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
		const currRef = scrollerRef.current;
		if (!currRef) return; // how does this even happen

		currRef.addEventListener('scroll', updateFadeouts);
		window.addEventListener('resize', updateFadeouts);
		return () => {
			currRef.removeEventListener('scroll', updateFadeouts);
			window.removeEventListener('resize', updateFadeouts);
		}
	}, [updateFadeouts]);

	// useEffect(updateFadeouts, [updateFadeouts, currFilter]);

	// const contentToShow = getFilteredEvents();

	return (
		<Flex 
		w="full" 
		h="full" 
		alignItems="center"
		overflow="hidden" 
		pt={{base: 0, xl: 'var(--main-margin-top)' }}>
			<Flex 
			direction="column" 
			pl={1}
			pr={3}
			py={2}
			h="full"
			w="full"
			maxH="fit-content">
				
				{/*<EventFilter
				eventTypes={EVENT_TYPES} 
				selected={currFilter} 
				setSelected={(val: string) => {setCurrFilter(val)}} />*/}
				
				<Box w="full" h="full" maxH="fit-content" overflow='hidden' position="relative">
					
					<Flex ref={scrollerRef} onScroll={updateFadeouts} className="event-card-scroller">
						{/*contentToShow.length > 0? 
							contentToShow.map((event, i) => <EventCard key={i} {...event} />)
							:
							<Text color="#fffa" textAlign='center' my='auto'>No events of this type yet!</Text>
						*/}
						{EVENTS.map((event, i) => <EventCard key={i} {...event} />)}
					</Flex>

					<ChevronUp
					onClick={() => {scrollerRef.current?.scrollBy({top: -200, behavior: 'smooth'})}}
					style={{display: canScrollUp? 'block' : 'none'}}
					className="scroll-up-icon" />

					<ChevronDown 
					onClick={() => {scrollerRef.current?.scrollBy({top: 200, behavior: 'smooth'})}}
					style={{display: canScrollDown? 'block' : 'none'}}
					className="scroll-down-icon" />

				</Box>

			</Flex>
		</Flex>
	);
};

export default EventsList;