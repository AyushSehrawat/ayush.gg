<script lang="ts">
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Mail from '@lucide/svelte/icons/mail';
	import Discord from '$lib/components/icons/discord.svelte';
	import { type Icon as IconType } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils';

	let { data } = $props();

	type SocialItem = {
		name: string;
		href: string;
		icon: typeof IconType | typeof Discord;
		ariaLabel: string;
	};

	const socialItems: SocialItem[] = [
		{
			name: 'github',
			href: 'https://github.com/ayushsehrawat',
			icon: Github,
			ariaLabel: 'visit my GitHub profile'
		},
		{
			name: 'linkedin',
			href: 'https://www.linkedin.com/in/ayushsehrawat/',
			icon: Linkedin,
			ariaLabel: 'connect with me on LinkedIn'
		},
		{
			name: 'mini@ayush.gg',
			href: 'mailto:mini@ayush.gg',
			icon: Mail,
			ariaLabel: 'send me an email'
		},
		{
			name: '_mini.dev',
			href: '#',
			icon: Discord,
			ariaLabel: 'discord username'
		}
	];

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	function getAnimationClass(axis: string = 'y') {
		const translateClasses = {
			initial: axis === 'y' ? 'translate-y-8 opacity-0' : 'translate-x-8 opacity-0',
			final: axis === 'y' ? 'translate-y-0 opacity-100' : 'translate-x-0 opacity-100'
		};

		return cn(
			`transition-all duration-700 ease-out`,
			mounted ? translateClasses.final : translateClasses.initial
		);
	}
</script>

<svelte:head>
	<title>mini space</title>
	<meta
		name="description"
		content="hey there! I'm mini, a college student passionate about computer science, web development, and design."
	/>
</svelte:head>

<main class="flex min-h-dvh flex-col items-center justify-between gap-16 p-8">
	<article class="flex w-full max-w-xl flex-1 flex-col justify-center gap-10">
		<div class={getAnimationClass()} style="transition-delay: 0ms;">
			<header class="mb-6 flex items-center gap-2 mt-4">
				<img src="/logo.png" alt="Mini's logo" class="size-8 rounded-full" loading="eager" />
				<h1 class="text-2xl text-txt-0">mini</h1>
			</header>
			<p class="leading-relaxed">
				hey there! I'm a college student who goes by mini online. i'm interested in computer
				science, web development, backend development, design, and more. i'm passionate about
				learning new things and sharing my knowledge with others.
			</p>
		</div>

		<section class={getAnimationClass()} style="transition-delay: 200ms;">
			<h2 class="mb-6 text-xl text-txt-0">now</h2>
			<p class="leading-relaxed">
				currently working on a few projects, including a new version of this website and some other
				fun stuff. Check out my <a
					href="https://github.com/ayushsehrawat"
					class="text-blue underline transition-all duration-200 hover:no-underline"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit my GitHub profile">github</a
				> for more.
			</p>
		</section>

		<section class={getAnimationClass()} style="transition-delay: 400ms;">
			<h2 class="mb-6 text-xl text-txt-0">posts</h2>
			<ul class="space-y-2">
				{#each data.posts as post (post.slug)}
					<li class="flex items-center justify-between gap-4">
						<a
							href={`/post/${post.slug}`}
							class="text-blue underline transition-all duration-200 hover:no-underline"
						>
							{post.metadata.title}
						</a>
						<span class="text-sm text-txt-2">{post.metadata.date}</span>
					</li>
				{/each}
			</ul>
		</section>

		<section class={getAnimationClass()} style="transition-delay: 800ms;">
			<h2 class="mb-6 text-xl text-txt-0">socials</h2>
			<ul class="list-disc space-y-2 pl-6">
				{#each socialItems as item, i (item.name)}
					<li class={getAnimationClass('x')} style="transition-delay: {1000 + i * 100}ms;">
						<a
							href={item.href}
							class="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1"
							target="_blank"
							rel="noopener noreferrer"
							aria-label={item.ariaLabel}
						>
							<item.icon size="16" aria-hidden="true" />
							<span class="text-blue underline transition-all duration-200 hover:no-underline">
								{item.name}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	</article>

	<footer
		class={cn('w-full max-w-xl text-center text-sm text-txt-2', getAnimationClass())}
		style="transition-delay: 1200ms;"
	>
		<p class="leading-relaxed">
			all great things take time. I just haven&apos;t started yet.
			<br />
			&copy; {new Date().getFullYear()} mini. all rights reserved.
		</p>
	</footer>
</main>
