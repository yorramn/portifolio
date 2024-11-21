<script lang="ts">
	import ResponsiveContainer from '$lib/components/ui/responsive-container/responsive-container.svelte';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Title from '../title/title.svelte';

	export let title = 'Title';
</script>

<Title {title} />

<ResponsiveContainer className="flex flex-col justify-center flex-1 pb-8">
	<H1 className="text-center py-16">{title}</H1>
	<div class="flex flex-1 flex-col gap-5 px-4">
		<slot />
	</div>
</ResponsiveContainer>
