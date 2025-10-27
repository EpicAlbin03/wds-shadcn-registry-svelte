<script lang="ts">
	import NumberInput, { type NumberInputProps } from './number-input.svelte';
	import { cn } from '$lib/utils';

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...props
	}: NumberInputProps = $props();
</script>

<NumberInput
	bind:ref
	bind:value
	data-slot="input-group-control"
	class={cn(
		'flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent',
		className
	)}
	{...props}
/>
