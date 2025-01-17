import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experiências';

let items: Array<Experience> = [
	{
		slug: 'dev-fullstack-cast-group',
		company: 'Cast Group',
		description: 'Atuei como desenvolvedor fullstack e líder técnico. Construí aplicações web e mobile, além de liderar a equipe de desenvolvimento.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 1, 17), to: new Date(2024, 11, 1) },
		skills: getSkills('ts', 'javascript', 'php', 'css', 'html', 'java', 'postgresql'),
		name: 'Desenvolvedor Fullstack Junior / Líder Técnico',
		color: 'blue',
		links: [
			{label: 'LinkedIn', to: 'https://www.linkedin.com/in/gabriel-yorramn-a15816289', newTab: true} 
		],
		logo: Assets.Php,
		shortDescription: "Desenvolvimento de aplicações web e mobile, como API's, sites e aplicativos."
	},
	{
		slug: 'dev-fullstack-montreal',
		company: 'Montreal Informática',
		description: 'Atuo como líder técnico, desenvolvedor fullstack pleno e analista de sistemas. Construo aplicações web e mobile, além de liderar a equipe de desenvolvimento.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2024, 10, 21)},
		skills: getSkills('ts', 'sass', 'css', 'html', 'javascript', 'php', 'postgresql'),
		name: 'Desenvolvedor Fullstack Pleno / Líder Técnico',
		color: 'orange',
		links: [
			{label: 'LinkedIn', to: 'https://www.linkedin.com/in/gabriel-yorramn-a15816289', newTab: true} 
		],
		logo: Assets.Php,
		shortDescription: 'Desenvolvimento de aplicações web e sistemas de alta complexidade.'
	},
];
items = items.sort((a, b) => b.period.from.getTime() - a.period.from.getTime())
const ExperienceData = { title, items };

export default ExperienceData;
