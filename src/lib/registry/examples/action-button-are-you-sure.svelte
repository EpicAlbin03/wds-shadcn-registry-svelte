<script lang="ts">
	import ActionButton from '$lib/registry/ui/action-button/action-button.svelte';

	const remoteFunc = async () => {
		// Simulate a remote function
		await new Promise((res) => setTimeout(res, 1000));
		return { error: false };
	};
</script>

<ActionButton
	action={remoteFunc}
	requireAreYouSure
	areYouSureDescription="I can put anything I want here."
>
	Do extra secure action
</ActionButton>
