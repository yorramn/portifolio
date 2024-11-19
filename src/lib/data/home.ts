import Assets from './assets';
import BaseData from './base';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
	links: [
		{ label: 'GitHub', href: 'https://github.com', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Twitter', href: 'https://twitter.com', icon: 'i-carbon-logo-twitter' },
		{ label: 'Email', href: 'mailto:riadh.adrani@pm.me', icon: 'i-carbon-at' }
	]
};

const carousel: Array<{ label: string; logo: (typeof Assets)[keyof typeof Assets] }> = [
	{ label: 'Typescript', logo: Assets.TypeScript },
	{ label: 'Svelte', logo: Assets.Svelte },
	{ label: 'Tailwindcss', logo: Assets.Tailwind },
	{ label: 'UnoCSS', logo: Assets.Unocss },
	{ label: 'Vite', logo: Assets.Vite }
];

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
