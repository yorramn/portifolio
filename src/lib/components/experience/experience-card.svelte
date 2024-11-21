<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Experience } from '$lib/data/types';
	import { computeExactDuration, getMonthName } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { Avatar, AvatarFallback } from '../ui/avatar';
	import { Badge } from '../ui/badge';
	import Button from '../ui/button/button.svelte';
	import { CardContent, CardTitle } from '../ui/card';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import Icon from '../ui/icon/icon.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
	import Muted from '../ui/typography/muted.svelte';

	const { it }: { it: Experience } = $props();

	const exactDuration = computeExactDuration(it.period.from, it.period.to);

	let from = $derived(`${getMonthName(it.period.from.getMonth())} ${it.period.from.getFullYear()}`);

	let to = $derived(
		it.period.to
			? `${getMonthName(it.period.to.getMonth())} ${it.period.to.getFullYear()}`
			: 'Present'
	);

	let period = $derived(`${from} - ${to}`);

	let badges = $derived([
		{ label: it.company, icon: 'i-carbon-building', tooltip: 'Company' },
		{ label: it.location, icon: 'i-carbon-location', tooltip: 'Location' },
		{ label: it.contract, icon: 'i-carbon-hourglass', tooltip: 'Contract Type' }
	] as const);
</script>

<FancyCard color={it.color} href={`/experience/${it.slug}`}>
	<CardContent class="flex flex-col gap-8 sm:flex-row">
		<Avatar>
			<AvatarFallback>
				<img src={Assets.Unknown.light} alt={it.name} />
			</AvatarFallback>
		</Avatar>
		<div class="flex flex-col gap-4">
			<CardTitle>{it.name}</CardTitle>
			<div class="flex flex-row flex-wrap gap-1">
				{#each badges as badge}
					<Tooltip>
						<TooltipTrigger>
							<Badge variant="outline" class="flex flex-row items-center gap-1">
								<Icon icon={badge.icon} />
								{badge.label}
							</Badge>
							<TooltipContent>{badge.tooltip}</TooltipContent>
						</TooltipTrigger>
					</Tooltip>
				{/each}
			</div>
			<Tooltip>
				<TooltipTrigger>
					<Muted className="flex flex-row items-center gap-2">
						<Icon icon="i-carbon-calendar" />
						<div>{period}</div>
					</Muted>
				</TooltipTrigger>
				<TooltipContent>Date range</TooltipContent>
			</Tooltip>
			<Tooltip>
				<TooltipTrigger>
					<Muted className="flex flex-row items-center gap-2">
						<Icon icon="i-carbon-time" />
						<div>{exactDuration}</div>
					</Muted>
					<TooltipContent side="bottom">Exact duration</TooltipContent>
				</TooltipTrigger>
			</Tooltip>
			<div class="flex flex-row flex-wrap gap-2">
				{#each it.skills as skill}
					<Tooltip openDelay={100}>
						<TooltipTrigger class="group">
							<a href={`/skills/${skill.slug}`}>
								<Button size="icon" variant="outline"
									><img
										class="size-[20px] grayscale-[0.75] group-hover:grayscale-0"
										src={$mode === 'dark' ? skill.logo.dark : skill.logo.light}
										alt={skill.name}
									/></Button
								>
							</a>
						</TooltipTrigger>
						<TooltipContent>{skill.name}</TooltipContent>
					</Tooltip>
				{/each}
			</div>
		</div>
	</CardContent>
</FancyCard>
