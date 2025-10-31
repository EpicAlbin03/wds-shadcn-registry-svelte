<script lang="ts">
	import { ActionButton } from '$lib/registry/components/action-button';

	const remoteFunc = async () => {
		// Simulate a remote function
		await new Promise((res) => setTimeout(res, 1000));
		return { error: false };
	};
</script>

<ActionButton action={remoteFunc} requireAreYouSure>Do action</ActionButton>
