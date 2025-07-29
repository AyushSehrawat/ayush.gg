<script lang="ts">
	let { data } = $props();
	import { cn } from '$lib/utils';

	const { title, date } = data.metadata;
	const { WritingContent } = data;
</script>

<svelte:head>
	<title>{title} - mini space</title>
</svelte:head>

<main class="flex min-h-dvh flex-col items-center justify-between gap-16 p-8">
	<article class="flex w-full max-w-xl flex-1 flex-col justify-center">
		<div class="mt-4 mb-12 space-y-2">
			<h1 class="text-2xl font-bold text-txt-0">{title}</h1>
			<p class="text-sm text-txt-2">{date}</p>
		</div>
		<div
			class={cn(
				'prose max-w-none prose-invert',
				'prose-h2:text-txt-1 prose-h1:text-2xl prose-h1:text-txt-0 prose-h2:text-xl prose-h3:text-txt-2',
				'prose-p:text-txt',
				'prose-a:text-blue'
			)}
		>
			<WritingContent />
		</div>
	</article>

	<footer class="w-full max-w-xl text-center text-sm text-txt-2">
		<p class="leading-relaxed">
			all great things take time. I just haven&apos;t started yet.
			<br />
			&copy; {new Date().getFullYear()} mini. all rights reserved.
		</p>
	</footer>
</main>
