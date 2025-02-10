import '../styles/eventFilter.css'
import { Box, Flex } from '@chakra-ui/react'

interface EventFilterProps {
	eventTypes: string[];
	selected: string;
	setSelected: (selected: string) => void;
}

const EventFilter = ({ eventTypes, selected, setSelected }: EventFilterProps) => {
	return (
		<Flex gap={4} mb={2} mr='var(--event-card-outline-width)' justifyContent='flex-end'>
			{eventTypes.map((eventType) => 
				<Box onClick={() => setSelected(eventType)} className={`event-filter-option ${selected === eventType ? 'selected' : ''}`}>
					{eventType}
				</Box>
			)}
		</Flex>
	);
};

export default EventFilter;