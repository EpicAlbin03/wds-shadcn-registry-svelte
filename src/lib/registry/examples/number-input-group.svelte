<script lang="ts">
	import { NumberInputGroup } from '$lib/registry/ui/number-input';
	import * as InputGroup from '$lib/components/ui/input-group/index.js';

	let value = $state<number | null>(null);
</script>

<InputGroup.Root class="w-[300px]">
	<NumberInputGroup placeholder="Favorite number" bind:value />
	<InputGroup.Addon>
		<InputGroup.Text>#</InputGroup.Text>
	</InputGroup.Addon>
</InputGroup.Root>
