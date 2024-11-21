<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import { Tooltip, TooltipTrigger } from '$lib/components/ui/tooltip';
	import TooltipContent from '$lib/components/ui/tooltip/tooltip-content.svelte';
	import H4 from '$lib/components/ui/typography/h4.svelte';
	import NavBarData from '$lib/data/nav-bar';
	import { toggleMode, mode } from 'mode-watcher';
</script>

<div
	class="border-1 absolute left-0 right-0 top-0 z-10 flex h-[50px] flex-row items-center border-b bg-[--bg] px-8 backdrop-blur-xl"
	style="--bg : hsl(var(--background) / 0.5)"
>
	<div class="sm:flex-1">
		<a href="/" class="flex flex-row items-center justify-start gap-2 text-2xl">
			<Tooltip>
				<TooltipTrigger>
					<Icon icon={NavBarData.left.icon} />
				</TooltipTrigger>
				<TooltipContent side="bottom" class="lg:hidden">
					{NavBarData.left.title}
				</TooltipContent>
			</Tooltip>
			<H4 className="hidden lg:block">{NavBarData.left.title}</H4>
		</a>
	</div>
	<div class="flex flex-[2] flex-row items-center justify-center gap-2">
		{#each NavBarData.items as item}
			<a href={item.href}>
				<Tooltip>
					<TooltipTrigger>
						<Button class="flex flex-row items-center justify-center gap-2" variant="ghost">
							<Icon icon={item.icon} className="text-xl" />
							<div class="hidden lg:block">{item.title}</div>
						</Button>
					</TooltipTrigger>
					<TooltipContent side="bottom" class="lg:hidden">
						{item.title}
					</TooltipContent>
				</Tooltip>
			</a>
		{/each}
	</div>
	<div class="flex flex-row items-center justify-end gap-2 sm:flex-1">
		<a href="/search">
			<Button variant="ghost" class="text-xl">
				<Icon icon="i-carbon-search" />
			</Button>
		</a>
		<Button variant="ghost" class="text-xl" on:click={toggleMode}>
			<Icon icon={$mode === 'dark' ? 'i-carbon-moon' : 'i-carbon-sun'} />
		</Button>
	</div>
</div>
