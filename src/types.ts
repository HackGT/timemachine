export type EventInfo = {
	title: string;
	font?: string;
	subtitle?: string;

	link: string;

	eventType: string;
	year: number;

	bgImg: string;
	bgPosition?: string; // CSS background-position property. default='center'
	useWhiteText?: boolean;

	dateBannerBg: string;
	dateBannerColor: string;
}