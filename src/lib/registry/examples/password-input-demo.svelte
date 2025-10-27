<script lang="ts">
	import { PasswordInput } from '$lib/registry/ui/password-input';

	let value = $state('Password');
</script>

<PasswordInput bind:value class="w-[250px]" />
