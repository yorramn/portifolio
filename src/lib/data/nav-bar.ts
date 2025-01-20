import BaseData from './base';

const left = { title: BaseData.fullName, icon: 'i-carbon-code' } as const;

const items: Array<{
	title: string;
	icon: `i-carbon-${string}`;
	href: string;
}> = [
	{ title: 'Habilidades', icon: 'i-carbon-assembly-cluster', href: '/skills' },
	{ title: 'Projetos', icon: 'i-carbon-cube', href: '/projects' },
	{ title: 'Experiência', icon: 'i-carbon-development', href: '/experience' },
	{ title: 'Educacional', icon: 'i-carbon-education', href: '/education' },
	{ title: 'Resumo', icon: 'i-carbon-document', href: '/resume' }
];

const NavBarData = { left, items };

export default NavBarData;
