import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Linguagens de Programação', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Marcação e Estilo', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Habilidades';

const items = [
	defineSkill({
		slug: 'javascript',
		color: 'yellow',
		description:
			'Uso presente quase em todos os projetos, o JavaScript domina a web. Com ele, é possível criar sites interativos, aplicativos móveis e até mesmo servidores. O JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página faz mais do que simplesmente mostrar informações estáticas para você — mostrando conteúdo atualizado, mapas interativos, animações em 2D/3D, rolagem de vídeo, etc. — você pode apostar que o JavaScript provavelmente está envolvido.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'red',
		description:
			'É uma linguagem de servidor, fracamente tipada (da versão 8 para trás), onde seu uso está direcionado a comunicação direta do servidor com o banco de dados, ou seja, é uma linguagem de back-end. O PHP é uma linguagem de script open source de uso geral, muito utilizada, e especialmente adequada para o desenvolvimento web e que pode ser embutida no HTML. O PHP é uma linguagem de programação de propósito geral, que é especialmente adequada para o desenvolvimento web e pode ser embutida no HTML.',
		logo: Assets.Php,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'Utilizada para desenvolvimento de aplicações web, o TypeScript é uma linguagem de programação de código aberto desenvolvida e mantida pela Microsoft. É um superconjunto de JavaScript, adicionando tipagem estática opcional à linguagem. O TypeScript é projetado para o desenvolvimento de aplicativos grandes e transcompila para JavaScript. Como o TypeScript é um superconjunto de JavaScript, programas JavaScript existentes também são programas TypeScript válidos. O TypeScript pode ser usado para desenvolver aplicativos JavaScript para serem executados no lado do cliente (como JavaScript) e no lado do servidor (usando o Node.js).',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'Deseja deixar sua aplicação mais bonita e elegante? CSS é indispensável na criação de aplicações web. O CSS é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML. O CSS descreve como os elementos HTML devem ser exibidos na tela, no papel ou em outras mídias. O CSS economiza muito trabalho. Você pode controlar o layout de várias páginas da Web de uma só vez. Com o CSS, você pode controlar o layout de várias páginas da Web de uma só vez.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'Basicamente falando do "esqueleto" do site, HTML (que não é uma linguagem de programação), é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A estrutura de um documento HTML é composta por elementos, que são representados por tags. As tags são utilizadas para formatar o texto, inserir imagens, criar links, tabelas, listas, etc. O HTML é uma linguagem de marcação que é usada para o desenvolvimento de páginas web. O HTML é uma linguagem de marcação que é usada para o desenvolvimento de páginas web.',	
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'java',
		color: 'grey',
		description:
			'Presente em maioria das aplicações de servidor e com alto nível de segurança, Java está presente até nos jogos. Java é uma linguagem de programação de propósito geral que é concorrente, baseada em classes e orientada a objetos. Foi projetada para ter o mínimo de dependências de implementação possível. É uma linguagem de programação de propósito geral que é concorrente, baseada em classes e orientada a objetos. Foi projetada para ter o mínimo de dependências de implementação possível.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'white',
		description:
			'Assim como o MySQL, o PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto. O PostgreSQL é um sistema de gerenciamento de banco de dados relacional de objeto de código aberto com mais de 15 anos de desenvolvimento ativo. Ele tem uma sólida reputação por sua confiabilidade, integridade de dados e conformidade com padrões. O PostgreSQL é um sistema de gerenciamento de banco de dados relacional de objeto de código aberto com mais de 15 anos de desenvolvimento ativo. Ele tem uma sólida reputação por sua confiabilidade, integridade de dados e conformidade com padrões.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'Sass é uma extensão de CSS que adiciona novas funcionalidades e possibilita a criação de folhas de estilo mais complexas. O Sass é uma extensão de CSS que adiciona novas funcionalidades e possibilidades à linguagem. O Sass é uma extensão de CSS que adiciona novas funcionalidades e possibilidades à linguagem.',
		logo: Assets.Sass,
		name: 'SaaS',
		category: 'markup-style'
	}),
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
