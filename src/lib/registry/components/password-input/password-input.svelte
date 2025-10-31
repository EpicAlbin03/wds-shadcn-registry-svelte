<script lang="ts">
	import { type WithElementRef } from '$lib/utils';
	import { EyeIcon, EyeOffIcon } from '@lucide/svelte';
	import * as InputGroup from '$lib/components/ui/input-group';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import PasswordInputStrengthChecker from './password-input-strength-checker.svelte';

	export type PasswordInputProps = { variant?: 'default' | 'strength' } & WithElementRef<
		Omit<HTMLInputAttributes, 'type' | 'files'>
	>;

	let {
		ref = $bindable(null),
		value = $bindable(''),
		variant = 'default',
		children,
		...props
	}: PasswordInputProps = $props();

	let showPassword = $state(false);
	const Icon = $derived(showPassword ? EyeOffIcon : EyeIcon);
</script>

<div class="space-y-3">
	<InputGroup.Root>
		<InputGroup.Input {...props} bind:ref bind:value type={showPassword ? 'text' : 'password'} />
		<InputGroup.Addon align="inline-end">
			<InputGroup.Button size="icon-xs" onclick={() => (showPassword = !showPassword)}>
				<Icon class="size-4.5" />
				<span class="sr-only">
					{#if showPassword}
						Hide password
					{:else}
						Show password
					{/if}
				</span>
			</InputGroup.Button>
		</InputGroup.Addon>
	</InputGroup.Root>
	{#if variant === 'strength'}
		<PasswordInputStrengthChecker password={value} />
	{:else}
		{@render children?.()}
	{/if}
</div>
