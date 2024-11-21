<script lang="ts">
	import Assets from '$lib/data/assets';
	import { ellipsify } from '@riadh-adrani/utils';
	import AvatarFallback from '../ui/avatar/avatar-fallback.svelte';
	import AvatarImage from '../ui/avatar/avatar-image.svelte';
	import Avatar from '../ui/avatar/avatar.svelte';
	import Badge from '../ui/badge/badge.svelte';
	import Button from '../ui/button/button.svelte';
	import { CardHeader } from '../ui/card';
	import CardContent from '../ui/card/card-content.svelte';
	import CardTitle from '../ui/card/card-title.svelte';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import Icon from '../ui/icon/icon.svelte';
	import Separator from '../ui/separator/separator.svelte';
	import { Tooltip, TooltipTrigger } from '../ui/tooltip';
	import TooltipContent from '../ui/tooltip/tooltip-content.svelte';
	import Muted from '../ui/typography/muted.svelte';
	import CardFooter from '../ui/card/card-footer.svelte';
	import SkillBadge from '../common/skill-badge/skill-badge.svelte';
	import { mode } from 'mode-watcher';
	import type { Project } from '$lib/data/types';
	import { computeExactDuration, getMonthName } from '$lib/utils';

	const { project }: { project: Project } = $props();

	let from = $derived(
		`${getMonthName(project.period.from.getMonth())} ${project.period.from.getFullYear()}`
	);
	let to = $derived(
		project.period.to
			? `${getMonthName(project.period.to.getMonth())} ${project.period.to.getFullYear()}`
			: 'Present'
	);
	let exactDuration = $derived(computeExactDuration(project.period.from, project.period.to));
</script>

<FancyCard color={project.color} class="flex h-full flex-col" href={`/projects/${project.slug}`}>
	<CardHeader class="flex w-full flex-col gap-4">
		<Avatar>
			<AvatarFallback>
				<img src={Assets.Unknown.light} alt={project.name} />
			</AvatarFallback>
			<AvatarImage src={$mode === 'dark' ? project.logo.dark : project.logo.light} />
		</Avatar>
		<div class="flex w-full flex-row items-center overflow-x-hidden">
			<CardTitle class="line-clamp-1 flex-1 truncate text-ellipsis text-nowrap"
				>{project.name}</CardTitle
			>
			{#each project.links as link (link.to)}
				<a href={link.to} target={link.newTab ? '_blank' : undefined}>
					<Tooltip>
						<TooltipTrigger>
							<Button size="icon" variant="outline"><Icon icon="i-carbon-link" /></Button>
						</TooltipTrigger>
						<TooltipContent>
							{link.label}
						</TooltipContent>
					</Tooltip>
				</a>
			{/each}
		</div>
		<Separator />
	</CardHeader>
	<CardContent class="flex flex-1 flex-col gap-4">
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-assembly-cluster" />
			<Muted>{project.type}</Muted>
		</Muted>
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-time" />
			<Muted>{exactDuration}</Muted>
		</Muted>
		<Muted className="flex-1">{ellipsify(project.description, 100)}</Muted>
		<div class="flex w-full flex-row items-center justify-between">
			<Badge variant="outline">{from}</Badge>
			<Badge variant="outline">{to}</Badge>
		</div>
		<Separator />
	</CardContent>
	<CardFooter class="flex flex-row flex-wrap items-center gap-2">
		{#each project.skills as skill (skill.slug)}
			<SkillBadge {skill} />
		{/each}
	</CardFooter>
</FancyCard>
