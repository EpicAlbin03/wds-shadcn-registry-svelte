<script lang="ts">
	import { cn } from '$lib/utils';
	import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { onMount } from 'svelte';

	type Props = {
		password: string;
	};

	let { password }: Props = $props();

	let optionsLoaded = $state(false);
	let errorLoadingOptions = $state(false);

	const strengthResult = $derived.by(() => {
		if (!optionsLoaded || password.length === 0) {
			return { score: 0, feedback: { warning: undefined } } as const;
		}
		return zxcvbn(password);
	});

	onMount(() => {
		Promise.all([import('@zxcvbn-ts/language-common'), import('@zxcvbn-ts/language-en')])
			.then(([common, english]) => {
				zxcvbnOptions.setOptions({
					translations: english.translations,
					graphs: common.adjacencyGraphs,
					maxLength: 50,
					dictionary: {
						...common.dictionary,
						...english.dictionary
					}
				});
				optionsLoaded = true;
			})
			.catch(() => (errorLoadingOptions = true));
	});

	function getLabel() {
		if (password.length === 0) return 'Password strength';
		if (!optionsLoaded) return 'Loading strength checker';

		const score = strengthResult.score;
		switch (score) {
			case 0:
			case 1:
				return 'Very weak';
			case 2:
				return 'Weak';
			case 3:
				return 'Strong';
			case 4:
				return 'Very strong';
			default:
				throw new Error(`Invalid score: ${score satisfies never}`);
		}
	}

	const label = getLabel();
</script>

{#if !errorLoadingOptions}
	<div class="space-y-0.5">
		<div
			role="progressbar"
			aria-label="Password Strength"
			aria-valuenow={strengthResult.score}
			aria-valuemin={0}
			aria-valuemax={4}
			aria-valuetext={label}
			class="flex gap-1"
		>
			{#each Array.from({ length: 4 }) as _, i (i)}
				{@const color = strengthResult.score >= 3 ? 'bg-primary' : 'bg-destructive'}
				<div
					class={cn('h-1 flex-1 rounded-full', strengthResult.score > i ? color : 'bg-secondary')}
				></div>
			{/each}
		</div>
		<div class="flex justify-end text-sm text-muted-foreground">
			{#if strengthResult.feedback.warning == null}
				{label}
			{:else}
				<Tooltip.Root>
					<Tooltip.Trigger class="underline underline-offset-1">
						{label}
					</Tooltip.Trigger>
					<Tooltip.Content side="bottom" sideOffset={4} class="text-base">
						{strengthResult.feedback.warning}
					</Tooltip.Content>
				</Tooltip.Root>
			{/if}
		</div>
	</div>
{/if}
