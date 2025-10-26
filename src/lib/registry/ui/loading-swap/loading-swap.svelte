<script lang="ts">
	import { cn } from '$lib/utils';
	import { LoaderCircleIcon } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	export type LoadingSwapProps = {
		isLoading: boolean;
		children: Snippet;
		class?: string;
	};

	let { isLoading, children, class: className }: LoadingSwapProps = $props();
</script>

<div class="grid grid-cols-1 items-center justify-items-center">
	<div
		class={cn(
			'col-start-1 col-end-2 row-start-1 row-end-2 w-full',
			isLoading ? 'invisible' : 'visible',
			className
		)}
	>
		{children}
	</div>
	<div
		class={cn(
			'col-start-1 col-end-2 row-start-1 row-end-2',
			isLoading ? 'visible' : 'invisible',
			className
		)}
	>
		<LoaderCircleIcon class="animate-spin" />
	</div>
</div>
