<script lang="ts">
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import AvatarFallback from '$lib/components/ui/avatar/avatar-fallback.svelte';
	import AvatarImage from '$lib/components/ui/avatar/avatar-image.svelte';
	import Avatar from '$lib/components/ui/avatar/avatar.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { CardContent, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import FancyCard from '$lib/components/ui/card/fancy-card.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Toggle from '$lib/components/ui/toggle/toggle.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import Assets from '$lib/data/assets';
	import ProjectsData from '$lib/data/projects';
	import SkillsData from '$lib/data/skills';
	import type { Skill } from '$lib/data/types';
	import { ellipsify } from '@riadh-adrani/utils';
	import { mode } from 'mode-watcher';
	import { onMount } from 'svelte';

	interface SkillFilter extends Skill {
		isSelected?: boolean;
	}

	let filters: Array<SkillFilter> = $state(
		SkillsData.items.filter((it) => {
			return ProjectsData.items.some((project) =>
				project.skills.some((skill) => skill.slug === it.slug)
			);
		})
	);

	let search = $state('');
	let result = $derived(
		ProjectsData.items.filter((project) => {
			const isFiltered =
				filters.every((item) => !item.isSelected) ||
				project.skills.some((tech) =>
					filters.some((filter) => filter.isSelected && filter.slug === tech.slug)
				);

			const isSearched =
				search.trim().length === 0 ||
				project.name.trim().toLowerCase().includes(search.trim().toLowerCase());

			return isFiltered && isSearched;
		})
	);

	const toggleSelected = (slug: string) => {
		filters = filters.map((it) => (it.slug === slug ? { ...it, isSelected: !it.isSelected } : it));
	};

	const onSearch = (query: string) => (search = query);

	onMount(() => {
		const query = location.search;

		if (query) {
			const queryParams = new URLSearchParams(location.search);

			const item = queryParams.get('item');

			if (item) {
				search = item;
			}
		}
	});
</script>

<SearchPage title={ProjectsData.title} {onSearch}>
	<div class="flex flex-col gap-8">
		<div class="flex flex-row flex-wrap gap-2">
			{#each filters as it}
				<Toggle
					pressed={it.isSelected}
					variant="outline"
					class="rounded-lg"
					on:click={() => toggleSelected(it.slug)}>{it.name}</Toggle
				>
			{/each}
		</div>
		<div class="grid grid-cols-3 gap-4">
			{#each result as it}
				<FancyCard color={it.color} class="flex h-full flex-col">
					<CardHeader class="flex w-full flex-col gap-4">
						<Avatar>
							<AvatarFallback>
								<img src={Assets.Unknown.light} alt={it.name} />
							</AvatarFallback>
							<AvatarImage src={$mode === 'dark' ? it.logo.dark : it.logo.light} />
						</Avatar>
						<div class="flex w-full flex-row items-center overflow-x-hidden">
							<CardTitle class="line-clamp-1 flex-1 truncate text-ellipsis text-nowrap"
								>{it.name}</CardTitle
							>
							{#each it.links as link}
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
							<Muted>{it.type}</Muted>
						</Muted>
						<Muted className="flex flex-row gap-2 items-center">
							<Icon icon="i-carbon-time" />
							<Muted>Duration</Muted>
						</Muted>
						<Muted className="flex-1">{ellipsify(it.description, 100)}</Muted>
						<div class="flex w-full flex-row items-center justify-between">
							<Badge variant="outline">Start</Badge>
							<Badge variant="outline">End</Badge>
						</div>
						<Separator />
					</CardContent>
					<CardFooter class="flex flex-row flex-wrap items-center gap-2">
						{#each it.skills as skill}
							<Tooltip openDelay={100}>
								<TooltipTrigger>
									<a href={`/skills/${skill.slug}`}>
										<Button size="icon" variant="outline"
											><img
												class="size-[20px]"
												src={$mode === 'dark' ? skill.logo.dark : skill.logo.light}
												alt={skill.name}
											/></Button
										>
									</a>
								</TooltipTrigger>
								<TooltipContent>{skill.name}</TooltipContent>
							</Tooltip>
						{/each}
					</CardFooter>
				</FancyCard>
			{/each}
		</div>
	</div>
</SearchPage>
