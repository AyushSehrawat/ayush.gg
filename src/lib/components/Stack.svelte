<script>
	import * as Icons from '$lib/icons/index.js';
	import Row from '$lib/components/Row.svelte';

	const softwares = [
		{
			name: 'Microsoft Edge',
			icon: Icons.Fa6BrandsEdge,
			tag: 'Browser'
		},
		{
			name: 'Visual Studio Code',
			icon: Icons.MdiMicrosoftVisualStudioCode,
			tag: 'Code Editor'
		},
		{
			name: 'Notion',
			icon: Icons.RadixIconsNotionLogo,
			tag: 'Notes'
		},
		{
			name: 'Discord',
			icon: Icons.PhDiscordLogo,
			tag: 'Communication'
		},
		{
			name: 'YT Music',
			icon: Icons.MaterialSymbolsYoutubeMusic,
			tag: 'Music'
		},
		{
			name: 'ChatGPT',
			icon: Icons.SimpleIconsOpenai,
			tag: 'AI'
		}
	];
</script>

<section
	class="flex flex-col h-full w-full overflow-x-hidden p-10 items-center justify-start gap-4 text-white"
>
	<Row>
		<div slot="title">&#x200B;</div>
		<div slot="content" class="flex flex-col font-saira-condensed">
			<p class="text-6xl">Stack</p>
			<p class="text-2xl">Languages, Frameworks, Libraries, Tools</p>
		</div>
	</Row>

	<Row>
		<div slot="title" class="text-start">
			<p class="text-2xl">Software</p>
		</div>
		<div slot="content" class="grid grid-cols-2 md:grid-cols-3 gap-4">
			{#each softwares as software}
				<div
					class="flex flex-col bg-zinc-700 bg-opacity-30 rounded-lg p-4 gap-4 items-center text-start"
				>
					<div class="flex items-center justify-center h-20 w-20">
						<svelte:component this={software.icon} />
					</div>
					<div class="flex w-full text-start items-start text-sm text-gray-400">
						<p class="border px-2 py-1 rounded-md border-zinc-600">{software.tag}</p>
					</div>
					<p class="text-lg text-start w-full">{software.name}</p>
				</div>
			{/each}
		</div>
	</Row>
</section>
