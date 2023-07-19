<script>
	import { onMount } from 'svelte';

	const socialLinks = [
		{
			name: 'Github',
			path: 'PhGithubLogo.svg',
			link: 'https://github.com/AyushSehrawat'
		},
		{
			name: 'LinkedIn',
			path: 'PhLinkedinLogo.svg',
			link: 'https://www.linkedin.com/in/AyushSehrawat/'
		},
		{
			name: 'Twitter',
			path: 'PhTwitterLogo.svg',
			link: 'https://twitter.com/mini5183'
		},
		{
			name: 'Discord',
			path: 'PhDiscordLogo.svg',
			link: 'https://discord.com/users/1108024311975002212'
		}
	];

    let userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    let userCurrentTime = new Date().toLocaleTimeString('en-US', {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        timeZone: userTimeZone,
    });

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

<!--
    Bug: Using h-[100dvh] causes some image resizing issues
-->

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
	<meta name="revisit-after" content="7 days" />
</svelte:head>

<main
	class="min-h-screen md:h-screen w-screen flex flex-col md:flex-row overflow-x-hidden font-saira-condensed"
>
	<section
		class="flex w-full h-screen md:w-2/5 relative bg-contain bg-center bg-no-repeat p-10 overflow-hidden"
		style="background-image: url('wolf.gif');"
	>
		<div class="absolute top-0 left-0 w-full h-full bg-black opacity-80" />
		<div class="h-full w-full flex flex-col items-start z-10">
			<img alt="logo" src="logo.png" class="h-14 w-14 rounded-2xl" />
			<div
				class="h-full w-full flex flex-col gap-4 items-center justify-center text-center text-3xl md:text-4xl lg:text-5xl tracking-wide font-semibold text-white"
			>
				<p>404: Motivation Not Found</p>

				<div class="flex md:hidden flex-col items-center justify-center">
					<div class="animate-bounce">
						<svg
							class="w-6 h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 14l-7 7m0 0l-7-7m7 7V3"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section
		class="flex flex-col w-full md:w-3/5 overflow-x-hidden overflow-y-scroll p-10 items-center text-center gap-4"
	>
		<p data-value={userCurrentTime} class="text-gray-600 text-xl randomize">{userCurrentTime}</p>
		<img alt="logo" src="logo.png" class="h-16 w-16 rounded-2xl" />
		<h2 class="text-3xl md:text-4xl text-gray-800">Ayush Sehrawat</h2>
		<p class="text-gray-600 text-2xl">Full Stack Developer | Open Source Enthusiast</p>
		<div class="flex gap-x-4 items-center">
			<div class="glowing-circle" />
			<p class="text-gray-600 text-xl">Available for new opportunities</p>
		</div>
		<div class="flex items-center gap-8 py-4">
			{#each socialLinks as link}
				<a href={link.link} target="_blank"
					><img alt={link.name} src={link.path} class="h-8 w-8" /></a
				>
			{/each}
		</div>
		<div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center w-full">
			<button
				on:click={() => {
					window.location.href = 'mailto:itsayushsehrawat@gmail.com';
				}}
				class="w-full md:max-w-max px-8 py-2 rounded-md bg-gray-800 text-white text-xl flex gap-4 items-center justify-center hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
			>
				<p>Contact Me</p>
				<img alt="logo" src="CibGmail.svg" class="h-5 w-5" />
			</button>
			<p class="text-gray-600 text-xl">or</p>
			<button
				on:click={() => {
					navigator.clipboard.writeText('itsayushsehrawat@gmail.com');
				}}
				class="w-full md:max-w-max px-8 py-2 rounded-md border-2 border-gray-800 text-xl flex gap-4 items-center justify-center hover:cursor-copy hover:scale-105 transition-all duration-300 ease-in-out"
			>
				<p>Copy Email</p>
				<img alt="logo" src="PhCopy.svg" class="h-5 w-5" />
			</button>
		</div>
		<p data-value="DEL, INDIA" class="text-gray-600 text-xl tracking-wide randomize">DEL, INDIA</p>
	</section>
</main>

<style>
	.glowing-circle {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: #b5ffb5;
		box-shadow: 0 0 3px 1px #b5ffb5, 0 0 6px 3px #8eff8e, 0 0 3px 3px #3b993b;
	}
</style>
