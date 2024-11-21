<script lang="ts">
	import BasePage from '$lib/components/common/base-page/base-page.svelte';
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import FancyBanner from '$lib/components/common/fancy-banner/fancy-banner.svelte';
	import EmptyMarkdown from '$lib/components/common/markdown/empty-markdown.svelte';
	import Markdown from '$lib/components/common/markdown/markdown.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Card, CardFooter } from '$lib/components/ui/card';
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import Assets from '$lib/data/assets';
	import type { Experience } from '$lib/data/types';
	import { computeExactDuration, href } from '$lib/utils';
	import { mode } from 'mode-watcher';

	let { data }: { data: { item?: Experience } } = $props();

	let title = $derived(`${data?.item?.name ?? 'Not Found'} - Skills`);
	let banner = $derived(
		($mode == 'dark' ? data?.item?.logo.dark : data.item?.logo.light) ?? Assets.Unknown.light
	);

	let duration = $derived(
		data.item ? computeExactDuration(data.item?.period.from, data.item?.period.to) : 'Unknown'
	);
</script>

<BasePage {title}>
	{#if !data.item}
		<EmptyResult />
	{:else}
		<FancyBanner img={banner}>
			<div class="flex w-full flex-col items-center justify-center gap-4">
				<H1>{data.item.name}</H1>
				<Muted>{data.item.company} · {data.item.location} · {data.item.type}</Muted>
				<Muted>{duration}</Muted>
				<Separator />
				<div class="flex flex-row flex-wrap gap-2">
					{#each data.item.links as link (link.to)}
						<a href={link.to} target="_blank"><Badge variant="outline">{link.label}</Badge></a>
					{/each}
				</div>
				<div class="flex flex-row flex-wrap gap-2">
					{#each data.item.skills as skill (skill.slug)}
						<a href={href(`/skills/${skill.slug}`)}>
							<Badge variant="outline" class="flex flex-row items-center justify-center gap-2">
								<img
									class="h-[20px] w-[20px]"
									src={$mode === 'dark' ? skill.logo.dark : skill.logo.light}
									alt={skill.name}
								/>
								<Muted>{skill.name}</Muted>
							</Badge>
						</a>
					{/each}
				</div>
			</div>
		</FancyBanner>
		<Separator />
		{#if data.item.description.trim()}
			<Markdown content={data.item.description} />
		{:else}
			<EmptyMarkdown />
		{/if}
		<Separator />
		<div class="flex flex-col gap-2 px-4 pt-4">
			{#if data.item.screenshots && data.item.screenshots.length > 0}
				<Muted>Screenshots</Muted>
				<div class="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{#each data.item.screenshots as img, index (index)}
						<Dialog>
							<DialogTrigger>
								<Card
									class="flex aspect-square flex-col justify-end bg-cover bg-center bg-no-repeat"
									style={`background-image:url("${img.src}")`}
								>
									<Separator />
									<CardFooter class="rounded-b-md bg-[#00000022] pt-4 text-white backdrop-blur-sm"
										>{img.label}</CardFooter
									>
								</Card>
							</DialogTrigger>
							<DialogContent class="flex min-h-[70%] min-w-[70%] flex-col">
								<DialogTitle>{img.label}</DialogTitle>
								<div
									class="flex-1 bg-cover bg-center bg-no-repeat"
									style={`background-image: url("${img.src}")`}
								></div>
								<DialogFooter>
									<DialogClose>
										<Button>Close</Button>
									</DialogClose>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</BasePage>
