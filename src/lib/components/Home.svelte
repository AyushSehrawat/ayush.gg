<script>
	import * as Icons from '$lib/icons/index.js';
	import Row from '$lib/components/Row.svelte';
	import work from '$lib/data/work.json';
	import Footer from '$lib/components/Footer.svelte';

	const socialLinks = [
		{
			name: 'Github',
			path: Icons.PhGithubLogo,
			link: 'https://github.com/AyushSehrawat'
		},
		{
			name: 'LinkedIn',
			path: Icons.PhLinkedinLogo,
			link: 'https://www.linkedin.com/in/AyushSehrawat/'
		},
		{
			name: 'Twitter',
			path: Icons.PhTwitterLogo,
			link: 'https://twitter.com/mini5183'
		},
		{
			name: 'Discord',
			path: Icons.PhDiscordLogo,
			link: 'https://discord.com/users/1108024311975002212'
		}
	];

	let userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
	let userCurrentTime = new Date().toLocaleTimeString('en-US', {
		hour12: true,
		hour: 'numeric',
		minute: 'numeric',
		timeZone: userTimeZone
	});
</script>

<section class="flex flex-col w-full overflow-x-hidden p-10 items-center text-center gap-4">
    <div class="w-full bg-zinc-700 p-2 text-white border">
        <p class="text-gray-400 text-xl">This website is still under development. Some features may not work as expected.</p>
    </div>
	<p data-value={userCurrentTime} class="text-gray-400 text-xl randomize">{userCurrentTime}</p>
	<img alt="logo" src="logo.png" class="h-16 w-16 rounded-2xl" />
	<h2 class="text-3xl md:text-4xl text-gray-200">Ayush Sehrawat</h2>
	<p class="text-gray-400 text-2xl">Full Stack Developer | Open Source Enthusiast</p>
	<div class="flex gap-x-4 items-center">
		<div class="glowing-circle" />
		<p class="text-gray-400 text-xl">Available for new opportunities</p>
	</div>
	<div class="flex items-center justify-center gap-8 py-4 min-w-max min-h-max">
		{#each socialLinks as link}
			<a href={link.link} class="text-white h-8 w-8" target="_blank"
				><svelte:component this={link.path} /></a
			>
		{/each}
	</div>
	<div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center w-full">
		<button
			on:click={() => {
				window.location.href = 'mailto:admin@ayush.gg';
			}}
			class="w-full md:max-w-max px-8 py-2 rounded-md bg-white text-black text-xl flex gap-4 items-center justify-center hover:cursor-pointer hover:bg-gray-200 transition-all duration-500 ease-in-out"
		>
			<p>Contact Me</p>
			<Icons.CibGmail />
		</button>
		<p class="text-gray-400 text-xl">or</p>
		<button
			on:click={() => {
				navigator.clipboard.writeText('admin@ayush.gg');
			}}
			class="relative w-full md:max-w-max px-8 py-2 rounded-md border-2 border-gray-400 bg-gray-800 text-white text-xl flex gap-4 items-center justify-center hover:cursor-copy hover:border-gray-300 transition-all duration-300 ease-in-out"
		>
			<p>Copy Email</p>
			<Icons.PhCopy />
		</button>
	</div>
	<p data-value="DEL, INDIA" class="text-gray-400 text-xl tracking-wide randomize">DEL, INDIA</p>

	<Row>
		<div slot="title">
			<h3>About Me</h3>
		</div>
		<div slot="content" class="flex flex-col items-start gap-2">
			<p>Hi, I'm Ayush Sehrawat, a fullstack developer based in New Delhi, India.</p>
			<p>
				I've been developing for over 3 years and I'm always eager to learn and explore new
				technologies. Currently, I'm working on personal projects, freelancing, and looking for new
				opportunities.
			</p>
			<p>
				I'm passionate about problem-solving and I pay close attention to detail. I'm confident that
				I can contribute to the success of any project as a developer.
			</p>
		</div>
	</Row>

	{#each work.work as project}
		<Row>
			<div slot="title" class="text-start">
				<h3>
					{project.when || 'Ongoing'}
				</h3>
			</div>
			<div slot="content" class="flex flex-col items-start gap-2">
				{#if project.link}
					<a
						href={project.link}
						target="_blank"
						class="flex items-center gap-2 text-white hover:gap-x-4 transition-all duration-300"
					>
						{project.title}
						<Icons.IcOutlineArrowOutward />
					</a>
				{:else}
					<p class="text-white">{project.title}</p>
				{/if}
				<p class="text-gray-400">{project.description}</p>

				{#if project.image}
					<img
						alt={project.name}
						src={project.image}
						class="rounded-2xl w-full h-auto md:max-w-md aspect-video"
					/>
				{/if}

				<button
					class="flex items-center gap-2 py-2 text-gray-200 underline decoration-wavy underline-offset-4 hover:gap-x-4 transition-all duration-300"
				>
					<p>Read more</p>
					<Icons.IcOutlineArrowOutward />
				</button>
			</div>
		</Row>
	{/each}

	<Footer />
</section>

<style global>
	.glowing-circle {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: #b5ffb5;
		box-shadow: 0 0 3px 1px #b5ffb5, 0 0 6px 3px #8eff8e, 0 0 3px 3px #3b993b;
	}
</style>
