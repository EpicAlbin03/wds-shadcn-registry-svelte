<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { LoadingSwap } from '$lib/registry/ui/loading-swap';

	let isLoading = $state(false);
</script>

<Button
	onclick={async () => {
		// Simulate loading state
		isLoading = true;
		await new Promise((res) => setTimeout(res, 1000));
		isLoading = false;
	}}
>
	<LoadingSwap {isLoading}>Click Me</LoadingSwap>
</Button>
