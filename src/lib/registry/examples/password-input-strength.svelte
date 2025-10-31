<script lang="ts">
	import { PasswordInput } from '$lib/registry/components/password-input';

	let value = $state('');
</script>

<PasswordInput bind:value variant="strength" />
