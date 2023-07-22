<script>
	import * as Icons from '$lib/icons/index.js';
	import Row from '$lib/components/Row.svelte';
    import Footer from '$lib/components/Footer.svelte';

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

	const languages = [
		{
			name: 'HTML',
			exp: 'Intermediate',
			icon: Icons.RiHtml5Fill
		},
		{
			name: 'CSS',
			exp: 'Intermediate',
			icon: Icons.NoniconsCss16
		},
		{
			name: 'JavaScript',
			exp: 'Intermediate',
			icon: Icons.IonLogoJavascript
		},
		{
			name: 'Bash',
			exp: 'Beginner',
			icon: Icons.CodiconTerminalBash
		},
		{
			name: 'Python',
			exp: 'Advanced',
			icon: Icons.MdiLanguagePython
		},
		{
			name: 'Rust',
			exp: 'Beginner',
			icon: Icons.SimpleIconsRust
		}
	];

	const frameworks = [
		{
			name: 'FastAPI',
			exp: 'Advanced',
			icon: Icons.SimpleIconsFastapi
		},
		{
			name: 'Svelte',
			exp: 'Intermediate',
			icon: Icons.TeenyiconsSvelteOutline
		},
		{
			name: 'Astro',
			exp: 'Intermediate',
			icon: Icons.SimpleIconsAstro
		},
		{
			name: 'TailwindCSS',
			exp: 'Advanced',
			icon: Icons.MdiTailwind
		}
	];
</script>

<section
	class="flex flex-col h-full w-full overflow-x-hidden p-10 items-center justify-start gap-4 text-white select-none"
>
	<Row>
		<div slot="title">&#x200B;</div>
		<div slot="content" class="flex flex-col font-saira-condensed gap-2">
			<p class="text-6xl">Stack</p>
			<p class="text-2xl">Software, Languages, Frameworks, Libraries, etc.</p>
		</div>
	</Row>

	<Row>
		<div slot="title" class="text-start">
			<p>Software</p>
		</div>
		<div slot="content" class="grid grid-cols-2 md:grid-cols-3 gap-4">
			{#each softwares as software}
				<div
					class="flex flex-col bg-zinc-700 bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 ease-in-out rounded-lg p-4 gap-4 items-center text-start"
				>
					<div class="flex items-center justify-center h-16 w-16 md:h-20 md:w-20">
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

	<Row>
		<div slot="title" class="text-start">
			<p>Languages</p>
		</div>
		<div slot="content" class="grid grid-cols-2 md:grid-cols-3 gap-4">
			{#each languages as language}
				<div
					class="flex gap-4 items-center text-start hover:bg-zinc-700 hover:bg-opacity-50 transition-all duration-300 rounded-lg ease-in-out p-2"
				>
					<div class="flex items-center h-auto w-10 md:w-12">
						<svelte:component this={language.icon} />
					</div>
					<div class="flex flex-col items-start">
						<p class="text-lg md:text-xl">{language.name}</p>
						<p class="text-sm md:text-lg text-gray-400">{language.exp}</p>
					</div>
				</div>
			{/each}
		</div>
	</Row>

	<Row>
		<div slot="title" class="text-start">
			<p>Frameworks</p>
		</div>
		<div slot="content" class="grid grid-cols-2 md:grid-cols-3 gap-4">
			{#each frameworks as framework}
				<div
					class="flex gap-4 items-center text-start hover:bg-zinc-700 hover:bg-opacity-50 transition-all duration-300 rounded-lg ease-in-out p-2"
				>
					<div class="flex items-center h-auto w-10 md:w-12">
						<svelte:component this={framework.icon} />
					</div>
					<div class="flex flex-col items-start">
						<p class="text-lg md:text-xl">{framework.name}</p>
						<p class="text-sm md:text-lg text-gray-400">{framework.exp}</p>
					</div>
				</div>
			{/each}
		</div>
	</Row>

    <Footer />
</section>
