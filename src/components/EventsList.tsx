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
const EVENTS: EventInfo[] = _events.sort((a, b) => b.year - a.year); // sort by year, descending so recent is at top======================================================

const EventsList = () => {

	const scrollerRef = useRef<HTMLDivElement>(null);


	const [canScrollDown, setCanScrollDown] = useState(false);
	const [canScrollUp, setCanScrollUp] = useState(false);


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

	useEffect(updateFadeouts, [updateFadeouts]);

	return (
		<Flex 
		w="full" 
		h="full" 
		alignItems="center"
		overflow="hidden" 
		pt={{base: 0, xl: 'var(--main-margin-top)' }}>

			<Flex direction="column" h="full" w="full" maxH="fit-content">
				
				<Box w="full" h="full" maxH="fit-content" overflow='hidden' position="relative">
					
					<Flex ref={scrollerRef} onScroll={updateFadeouts} className="event-card-scroller">
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