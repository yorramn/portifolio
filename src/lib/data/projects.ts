import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';
async function fetchGitHubRepos(username : string) : Promise<any> {
    try {
        if (!username) {
            console.error('Informe um nome de usuário!');
            return;
        }
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
		// console.log(await response.json());
        if (!response.ok) {
            throw new Error(`Erro ao buscar repositórios: ${response.status} - ${response.statusText}`);
        }
		return await response.json();
    } catch (error : any) {
        console.error('Erro:', error.message);
    }
}
const projects : Array<any> = Array.from(await fetchGitHubRepos('yorramn')).map((project : any) => {
	return {
		id : project.id,
		slug: project.name,
		color: '#5e95e3',
		description: project.description ?? 'README',
		shortDescription: project.description ?? 'README',
		links: [
			{ to: 'https://github.com/yorramn/'+project.name, label: 'GitHub' },
		],
		logo: Assets.Unknown,
		name: project.name,
		period: {
			from: new Date(project.created_at)
		},
		skills: getSkills(project),
		type: 'Website Template'
	}
})
.filter((project : any) => project.slug !== 'portifolio')
.sort((a : any, b : any) => new Date(b.period.from).getTime() - new Date(a.period.from).getTime())

let items: Array<Project> = [];

items = projects

const title = 'Projetos';

const ProjectsData = { title, items };

export default ProjectsData;
