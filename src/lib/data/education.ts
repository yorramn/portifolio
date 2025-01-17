import Assets from './assets';
import type { Education } from './types';

const title = 'Educacional';

const items: Array<Education> = [
	{
		degree: 'Técnico em Desenvolvimento de Sistemas',
		description: 'Aprendizado de Linguagem de Programação de Alto e Médio nível, juntamente com desenvolvimento de aplicações web e UI. Desenvolvimento completo de aplicações e conceitos de UXUI e afins.',
		location: 'São Paulo - SP',
		logo: Assets.Php,
		name: '',
		organization: 'ETEC de Itaquera',
		period: { from: new Date(2018, 1, 1), to: new Date(2019, 8, 0) },
		shortDescription: 'Aprendizado de Linguagem de Programação de Alto e Médio nível, juntamente com desenvolvimento de aplicações web e UI.',
		slug: 'dummy-education-item',
		subjects: ['Web', 'HTML', 'CSS', 'JavaScript', 'Algorithm', 'Algebra', 'Java', 'English']
	},
	{
		degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
		description: 'Desenvolvimento de Sistemas, utilizando conceitos de Engenharia de Software, Desenvolvimento de Aplicações Web e Mobile, Banco de Dados e afins. Ao final do curso, fui capaz de desenvolver sistemas de informação, desde a concepção até a implementação, utilizando tecnologias atuais e emergentes. Aplicações de conceitos de DMR, TDD, BDD, DDD, SOLID, Clean Code, Clean Architecture, entre outros.',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'MIT',
		period: { from: new Date(2020, 0, 1), to: new Date(2023, 0, 0) },
		shortDescription: 'Desenvolvimento de Sistemas, utilizando conceitos de Engenharia de Software, Desenvolvimento de Aplicações Web e Mobile, Banco de Dados e afins.',
		slug: 'dummy-education-item-2',
		subjects: ['Web', 'HTML', 'CSS', 'PHP', 'SpringBoot', 'JRE/JSE', 'JavaScript', 'Algorithm', 'Algebra', 'Java', 'English']
	}
].sort((a, b) => b.period.from.getTime() - a.period.from.getTime());

const EducationData = { title, items };

export default EducationData;
