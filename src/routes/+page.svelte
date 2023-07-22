<script>
	import { onMount } from 'svelte';
	import * as Icons from '$lib/icons/index.js';
	import { currentSelectedTab } from '$lib/stores.js';
	import Home from '$lib/components/Home.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Stack from '$lib/components/Stack.svelte';
	import Work from '$lib/components/Work.svelte';

	onMount(async () => {
		const randomizeElements = document.getElementsByClassName('randomize');
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		Array.from(randomizeElements).forEach((element) => {
			let iteration = 0;

			let interval = setInterval(() => {
				element.innerText = element.innerText
					.split('')
					.map((letter, index) => {
						if (index < iteration) {
							return element.dataset.value[index];
						}

						return letters[Math.floor(Math.random() * 26)];
					})
					.join('');

				if (iteration >= element.dataset.value.length) {
					clearInterval(interval);
				}

				iteration += 1 / 3;
			}, 30);
		});
	});
</script>

<svelte:head>
	<title>Ayush Sehrawat</title>
	<meta
		name="description"
		content="Ayush Sehrawat | Full Stack Developer | Open Source Enthusiast"
	/>
	<meta
		name="keywords"
		content="Ayush Sehrawat, Ayush, Sehrawat, Full Stack Developer, Open Source Enthusiast"
	/>
	<meta name="author" content="Ayush Sehrawat" />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="1 days" />
</svelte:head>

<main
	class="min-h-[100dvh] md:h-[100dvh] w-full flex flex-col md:flex-row overflow-x-hidden font-saira-condensed bg-zinc-800"
>
	<Navbar />

	{#if $currentSelectedTab == "home"}
		<Home />
	{:else if $currentSelectedTab == "work"}
		<Work />
	{:else if $currentSelectedTab == "stack"}
		<Stack />
	{:else if $currentSelectedTab == "contact"}
		<Contact />
	{:else if $currentSelectedTab == "about"}
		<About />
	{/if}

</main>
