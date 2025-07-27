<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="bg-bg font-display text-txt">
	{@render children()}
</div>
