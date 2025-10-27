<script lang="ts">
	import ActionButton from '$lib/registry/blocks/action-button.svelte';

	const remoteFunc = async () => {
		// Simulate a remote function
		await new Promise((res) => setTimeout(res, 1000));
		return {
			error: true,
			message: 'Something went wrong. Please try again later.'
		};
	};
</script>

<ActionButton variant="destructive" action={remoteFunc}>Do error action</ActionButton>
