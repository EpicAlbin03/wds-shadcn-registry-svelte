<script lang="ts">
	import { Button, type ButtonProps } from '$lib/components/ui/button';
	import { toast } from 'svelte-sonner';
	import { LoadingSwap } from '$lib/registry/ui/loading-swap';
	import * as Alert from '$lib/components/ui/alert-dialog';

	type Props = {
		action: () => Promise<{ error: boolean; message?: string }>;
		requireAreYouSure?: boolean;
		areYouSureDescription?: string;
	} & ButtonProps;

	let {
		action,
		requireAreYouSure = false,
		areYouSureDescription = 'This action cannot be undone.',
		children,
		...props
	}: Props = $props();

	let isLoading = $state(false);

	async function performAction() {
		const data = await action();
		if (data.error) toast.error(data.message ?? 'Error');
	}
</script>

{#if requireAreYouSure}
	<Alert.Root open={isLoading}>
		<Alert.Trigger {...props}>
			{#snippet child({ props })}
				<Button {...props} />
			{/snippet}
		</Alert.Trigger>
		<Alert.Content>
			<Alert.Header>
				<Alert.Title>Are you sure?</Alert.Title>
				<Alert.Description>
					{@html areYouSureDescription}
				</Alert.Description>
			</Alert.Header>
			<Alert.Footer>
				<Alert.Cancel>Cancel</Alert.Cancel>
				<Alert.Action disabled={isLoading} onClick={performAction}>
					<LoadingSwap {isLoading}>Yes</LoadingSwap>
				</Alert.Action>
			</Alert.Footer>
		</Alert.Content>
	</Alert.Root>
{:else}
	<Button
		{...props}
		disabled={props.disabled ?? isLoading}
		onclick={(e: MouseEvent & { currentTarget: HTMLButtonElement | HTMLAnchorElement }) => {
			performAction();

			if (e.currentTarget instanceof HTMLButtonElement) {
				props.onclick?.(e as MouseEvent & { currentTarget: HTMLButtonElement });
			} else if (e.currentTarget instanceof HTMLAnchorElement) {
				props.onclick?.(e as MouseEvent & { currentTarget: HTMLAnchorElement });
			}
		}}
	>
		<LoadingSwap {isLoading} class="inline-flex items-center gap-2">
			{@render children?.()}
		</LoadingSwap>
	</Button>
{/if}
