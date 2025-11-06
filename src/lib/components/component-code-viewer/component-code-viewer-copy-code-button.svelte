<script lang="ts">
	import { UseClipboard } from '$lib/hooks/use-clipboard.svelte.js';
	import { ComponentCodeViewerContext } from './component-code-viewer.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import ClipboardIcon from '@lucide/svelte/icons/clipboard';
	import CheckIcon from '@lucide/svelte/icons/check';
	import { cn } from '$lib/utils.js';
	import type { ComponentProps } from 'svelte';

	let { class: className }: ComponentProps<typeof Button> = $props();

	const ctx = ComponentCodeViewerContext.get();
	const clipboard = new UseClipboard();
</script>

{#if ctx.activeFileCodeToCopy}
	<Button
		onclick={() => {
			clipboard.copy(ctx.activeFileCodeToCopy);
		}}
		class={cn('mr-2 size-7 shrink-0 rounded-md p-0 [&>svg]:size-3', className)}
		variant="ghost"
	>
		{#if clipboard.copied}
			<CheckIcon />
		{:else}
			<ClipboardIcon />
		{/if}
	</Button>
{/if}
