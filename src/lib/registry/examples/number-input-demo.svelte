<script lang="ts">
	import { NumberInput } from '$lib/registry/ui/number-input';

	let value = $state<number | null>(null);
</script>

<NumberInput placeholder="Age" bind:value class="w-[250px]" />
