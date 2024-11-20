<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import TitledPage from '../titled-page/titled-page.svelte';
	import { browser } from '$app/environment';
	import Input from '$lib/components/ui/input/input.svelte';

	let {
		title = 'Untitled',
		onSearch,
		children
	}: { title: string; onSearch: (value: string) => void; children: Snippet } = $props();

	let query = $state('');

	$effect(() => {
		if (browser) {
			let searchParams = new URLSearchParams(window.location.search);

			searchParams.set('q', query);

			const url = `${window.location.protocol}//${window.location.host}${
				window.location.pathname
			}?${searchParams.toString()}`;

			const state = window.history.state;

			window.history.replaceState(state, '', url);

			onSearch(query);
		}
	});

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);

		query = searchParams.get('q') ?? '';
	});
</script>

<TitledPage {title}>
	<Input placeholder="Search..." bind:value={query} />
	{@render children()}
</TitledPage>
