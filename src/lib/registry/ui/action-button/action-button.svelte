<script lang="ts">
	import { Button, type ButtonProps } from '$lib/components/ui/button';
	import { toast } from 'svelte-sonner';
	import { LoadingSwap } from '$lib/registry/ui/loading-swap';
	import * as Alert from '$lib/components/ui/alert-dialog';

	export type ActionButtonProps = {
		action: () => Promise<{ error: boolean; message?: string }>;
		requireAreYouSure?: boolean;
		areYouSureDescription?: string;
	} & Omit<ButtonProps, 'id'> & { id?: string };

	let {
		action,
		requireAreYouSure = false,
		areYouSureDescription = 'This action cannot be undone.',
		children,
		...props
	}: ActionButtonProps = $props();

	let isLoading = $state(false);

	async function performAction() {
		isLoading = true;
		const data = await action();
		isLoading = false;
		if (data.error) toast.error(data.message ?? 'Error');
	}
</script>

{#if requireAreYouSure}
	<Alert.Root open={isLoading}>
		<Alert.Trigger {...props}>
			{#snippet child({ props })}
				<Button {...props}>
					{@render children?.()}
				</Button>
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
				<Alert.Action disabled={isLoading} onclick={performAction}>
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
