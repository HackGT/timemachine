import '../styles/eventFilter.css'
import { Box, Flex } from '@chakra-ui/react'

interface EventFilterProps {
	eventTypes: string[];
	selected: string;
	setSelected: (selected: string) => void;
}

const EventFilter = ({ eventTypes, selected, setSelected }: EventFilterProps) => {
	return (
		<Flex 
		flexWrap='wrap' 
		columnGap={4} 
		rowGap={1}
		mb={3} 
		mr='var(--event-card-outline-width)' 
		justifyContent={{base: 'center', xl: 'flex-end'}}>
			{eventTypes.map((eventType, i) => 
				<Box 
				key={i}
				onClick={() => setSelected(eventType)} 
				className={`event-filter-option ${selected === eventType ? 'selected' : ''}`}>
					{eventType}
				</Box>
			)}
		</Flex>
	);
};

export default EventFilter;