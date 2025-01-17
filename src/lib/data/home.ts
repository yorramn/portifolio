import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Há mais de 5 anos desenvolvendo aplicações, tirando do papel e colocando em prática os projetos que você sonha. Atuo com diversas tecnologias e estou sempre em busca de novos desafios.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/yorramn', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-yorramn-a15816289/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Whatsapp', href: 'https://wa.me/+5511989416584?text=Oi', icon: 'i-carbon-phone' },
		{ label: 'Email', href: 'mailto:yorramn.dev@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
