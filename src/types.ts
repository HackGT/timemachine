export type EventInfo = {
	title: string;
	subtitle?: string;

	link: string;

	eventType: string;
	year: number;

	bgImg: string;
	bgPosition?: string; // CSS background-position property. default='center'
	useWhiteText?: boolean;

	colors: {
		yearBgColor: string;      // year background color
		yearTextColor: string;    // year text color
		yearShadowColor: string;  // used for year text shadow
		titleColor: string;       // title text color
		titleShadowColor: string; // title text shadow color
	}
}