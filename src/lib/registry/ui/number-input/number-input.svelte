<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { type WithElementRef } from '$lib/utils';
	import type { HTMLInputAttributes } from 'svelte/elements';

	export type NumberInputProps = WithElementRef<Omit<HTMLInputAttributes, 'type' | 'files'>>;

	let { ref = $bindable(null), value = $bindable(), ...props }: NumberInputProps = $props();
</script>

<Input bind:ref bind:value type="number" {...props} />
