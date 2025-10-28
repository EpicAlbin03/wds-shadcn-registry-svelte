<script lang="ts">
	import { MultiSelect } from '$lib/registry/ui/multi-select';

	const fruits = [
		{ value: 'apple', label: 'Apple', badgeLabel: '🍎' },
		{ value: 'banana', label: 'Banana', badgeLabel: '🍌' },
		{ value: 'cherry', label: 'Cherry', badgeLabel: '🍒' },
		{ value: 'grapes', label: 'Grapes', badgeLabel: '🍇' },
		{ value: 'kiwi', label: 'Kiwi', badgeLabel: '🥝' },
		{ value: 'orange', label: 'Orange', badgeLabel: '🍊' }
	];

	let value = $state<string[]>([]);
</script>

<MultiSelect bind:value items={fruits} placeholder="Select fruits..." class="w-[400px]" />
