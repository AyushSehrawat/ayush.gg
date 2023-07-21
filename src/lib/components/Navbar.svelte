<script>
	import * as Icons from '$lib/icons/index.js';
	import { currentSelectedTab } from '$lib/stores.js';

	const sidebar = [
		{
			name: 'home',
			icon: Icons.PhHouseSimple
		},
		{
			name: 'work',
			icon: Icons.Command
		},
		{
			name: 'stack',
			icon: Icons.PhStack
		},
		{
			name: 'contact',
			icon: Icons.MailOutline
		},
		{
			name: 'about',
			icon: Icons.MdiAccountOutline
		}
	];

	function changeCurrent(name) {
		currentSelectedTab.update((_) => name);
	}
</script>

<div
	class="flex flex-row md:flex-col items-center justify-between md:justify-center md:gap-6 p-4 fixed md:static bottom-0 w-full md:w-16 h-16 md:h-[100dvh] overflow-hidden bg-zinc-800 text-white border-t md:border-r md:border-t-0 border-gray-600"
>
	{#each sidebar as item}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->

		{#if item.name == $currentSelectedTab}
			<div on:click|preventDefault={() => changeCurrent('home')} class="h-8 w-8">
				<svelte:component this={item.icon} />
			</div>
		{:else}
			<div
				on:click|preventDefault={() => changeCurrent(item.name)}
				class="h-8 w-8 text-gray-400 hover:text-white transition-all duration-300 ease-in-out"
			>
				<svelte:component this={item.icon} />
			</div>
		{/if}
	{/each}
</div>
