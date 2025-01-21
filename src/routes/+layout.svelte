<script lang="ts">
	import NavBar from '$lib/components/common/nav-bar/nav-bar.svelte';
	import 'virtual:uno.css';
	import '../app.css';
	import '../markdown.css';
	import { ModeWatcher } from 'mode-watcher';
	import Button from '$lib/components/ui/button/button.svelte';

	let { children } = $props();
</script>
<style>
	.btn-whatsapp{
		position: fixed;
		bottom: 50px;
		right: 20px;
		width: max-content;
		height: max-content;
	}
	.btn-whatsapp a{
		border-radius: 50%;
		padding: 20px 10px;
		background-image: url('https://static.vecteezy.com/system/resources/previews/023/986/589/non_2x/whatsapp-logo-whatsapp-logo-transparent-whatsapp-icon-transparent-free-free-png.png');
		background-position: center;
		background-size: 100%;
	}
	
</style>
<ModeWatcher />
<div class="flex h-screen w-screen flex-col overflow-x-hidden">
	<NavBar />
	<div class="mt-[50px] flex flex-1 flex-col">{@render children()}</div>
	<div class="btn-whatsapp">
		<a href="https://wa.me/+5511989416584" target="_blank">
			<Button variant="link" size="lg">
			</Button>
		</a>
	</div>
</div>
