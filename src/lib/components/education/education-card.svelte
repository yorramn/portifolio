<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Education } from '$lib/data/types';
	import { computeExactDuration, getMonthName } from '$lib/utils';
	import { Avatar, AvatarFallback } from '../ui/avatar';
	import { Badge } from '../ui/badge';
	import { CardContent, CardTitle } from '../ui/card';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import Icon from '../ui/icon/icon.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
	import Muted from '../ui/typography/muted.svelte';

	const { it }: { it: Education } = $props();

	const exactDuration = computeExactDuration(it.period.from, it.period.to);

	let from = $derived(`${getMonthName(it.period.from.getMonth())} ${it.period.from.getFullYear()}`);

	let to = $derived(
		it.period.to
			? `${getMonthName(it.period.to.getMonth())} ${it.period.to.getFullYear()}`
			: 'Present'
	);

	let period = $derived(`${from} - ${to}`);

	let location = `${it.organization}, ${it.location}`;
</script>

<FancyCard href={`/education/${it.slug}`}>
	<CardContent class="flex flex-col gap-8 sm:flex-row">
		<Avatar>
			<AvatarFallback>
				<img src={Assets.Unknown.light} alt={it.name} />
			</AvatarFallback>
		</Avatar>
		<div class="flex flex-col gap-4">
			<CardTitle>{it.degree}</CardTitle>
			<Tooltip>
				<TooltipTrigger>
					<Muted className="flex flex-row items-center gap-2">
						<Icon icon="i-carbon-location" />
						<div>{location}</div>
					</Muted>
				</TooltipTrigger>
				<TooltipContent>Date range</TooltipContent>
			</Tooltip>
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
				{#each it.subjects as subject}
					<Badge variant="secondary">{subject}</Badge>
				{/each}
			</div>
		</div>
	</CardContent>
</FancyCard>
