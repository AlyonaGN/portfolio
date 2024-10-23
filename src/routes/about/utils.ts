export const ABOUT_GREETING = "Hi, I'm Alena!";

export const ABOUT_PROFESSION = `I'm an experienced frontend engineer who loves crafting delightful UI experiences, supported by performant, well-architected code. 
    My work experience includes building and maintaining two MVPs from stratch as a solo frontend engineer at a startup, 
    as well as contributing to a large-scale project as part of a cross-functional team at Headspace Health.
    During my time at Headspace Health, I have designed and implemented the chat and inbox features, smart replies feature powered by our ML model, and led the state management refactoring`;

export const ABOUT_PERSONAL = `I live in Haarlem, the Netherlands, with my husband and our dachshund. 
My husband is a backend engineer, so we like to call ourselves a full-stack family. 
Our dog may not code, but he makes an excellent pair programmer.`;

export const ABOUT_INTERESTS = `In my free time, I enjoy staying active through resistance training, cardio, and mobility exercises. 
I also love training my dog in nose work and teaching him funny tricks, as well as discovering new specialty coffee spots. 
I practice mindfulness and meditation regularly — not for the spiritual aspect, but for the clarity it brings.`;

export const picturesNames: Record<string, string> = {
	tshirt: 'tshirt',
	family: 'family',
	oxyAlena: 'oxyAlena',
	oxy: 'oxy'
};

export const PICTURES = [
	{
		caption: 'Sayana got acqiured by Headspace Health',
		alt: 'Acqusition T-Shirt',
		name: picturesNames.tshirt
	},
	{
		caption: 'Family',
		alt: 'Eugene, Alena and Oxy',
		name: picturesNames.family
	},
	{
		caption: 'Oxy & Alena',
		alt: 'Oxy & Alena',
		name: picturesNames.oxyAlena
	},
	{
		caption: 'Oxy',
		alt: 'Oxy',
		name: picturesNames.oxy
	}
];

export const picturesGridTemplate = `"${picturesNames.tshirt} ${picturesNames.oxyAlena} "
    "${picturesNames.family} ${picturesNames.oxy}"`;
