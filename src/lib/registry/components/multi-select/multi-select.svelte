<script lang="ts">
	import { CheckIcon, ChevronsUpDownIcon, XIcon } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import { Badge } from '$lib/components/ui/badge';
	import * as Command from '$lib/components/ui/command';
	import { Select as SelectPrimitive, type SelectMultipleRootProps } from 'bits-ui';
	import * as Popover from '$lib/components/ui/popover';
	import { useResizeObserver, watch } from 'runed';

	export type MultiSelectProps = {
		placeholder?: string;
		placeholderSearch?: string;
		emptySearchMessage?: string;
		disableSearch?: boolean;
		overflowBehavior?: 'wrap' | 'wrap-when-open' | 'cutoff';
		items: {
			value: string;
			label: string;
			badgeLabel?: string;
			disabled?: boolean;
		}[];
	} & Omit<SelectMultipleRootProps, 'type'>;

	let {
		open = $bindable(false),
		value = $bindable([]),
		items = [],
		class: className,
		disableSearch = false,
		placeholder = undefined,
		placeholderSearch = undefined,
		emptySearchMessage = undefined,
		overflowBehavior = 'wrap-when-open',
		...props
	}: MultiSelectProps = $props();

	let containerElement = $state<HTMLElement>(null!);
	let overflowElement = $state<HTMLElement>(null!);

	let search = $state('');
	let shouldWrap = $derived(
		overflowBehavior === 'wrap' || (overflowBehavior === 'wrap-when-open' && open)
	);
	let overflowAmount = $state(0);

	function toggleValue(v: string) {
		if (value.includes(v)) value = value.filter((x) => x !== v);
		else value = [...value, v];
	}

	function removeValue(v: string) {
		value = value.filter((x) => x !== v);
	}

	function checkOverflow() {
		if (!containerElement) return;
		const items = containerElement.querySelectorAll<HTMLElement>('[data-selected-item]');

		if (overflowElement) overflowElement.style.display = 'none';
		items.forEach((child) => child.style.removeProperty('display'));

		let amount = 0;
		for (let i = items.length - 1; i >= 0; i--) {
			const child = items[i]!;
			if (containerElement.scrollWidth <= containerElement.clientWidth) {
				break;
			}
			amount = items.length - i;
			child.style.display = 'none';
			overflowElement?.style.removeProperty('display');
		}

		overflowAmount = amount;
	}

	useResizeObserver(() => containerElement, checkOverflow);

	watch(() => open, checkOverflow);
</script>

<SelectPrimitive.Root type="multiple" bind:value {...props}>
	<Popover.Root bind:open>
		<Popover.Trigger>
			{#snippet child({ props })}
				<SelectPrimitive.Trigger
					{...props}
					data-slot="select-trigger"
					data-size="default"
					class={cn(
						"flex !h-auto min-h-9 w-fit items-center gap-2 overflow-hidden rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
						className
					)}
				>
					<div
						bind:this={containerElement}
						class={cn('flex w-fit gap-1.5 overflow-hidden', shouldWrap && 'h-full flex-wrap')}
					>
						{#if value.length === 0}
							{placeholder}
						{:else}
							{#each value as v (v)}
								<Badge
									variant="outline"
									data-selected-item
									class="flex items-center gap-1 hover:[&>svg]:text-destructive"
									onclick={(e) => {
										e.stopPropagation();
										removeValue(v);
									}}
								>
									{@const item = items.find((f) => f.value === v)}
									{item?.badgeLabel ?? item?.label}
									<XIcon class="size-2 shrink-0 text-muted-foreground" />
								</Badge>
							{/each}
							<Badge
								bind:ref={overflowElement}
								variant="outline"
								style={`display: ${overflowAmount > 0 && !shouldWrap ? 'block' : 'none'}`}
							>
								+{overflowAmount}
							</Badge>
						{/if}
					</div>
					<ChevronsUpDownIcon class="ml-auto size-4 opacity-50" />
				</SelectPrimitive.Trigger>
			{/snippet}
		</Popover.Trigger>

		<Popover.Content class="min-w-[var(--bits-popover-anchor-width)] p-0">
			<Command.Root>
				{#if !disableSearch}
					<Command.Input placeholder={placeholderSearch} bind:value={search} />
				{/if}
				<Command.List>
					<Command.Empty>{emptySearchMessage}</Command.Empty>
					<Command.Group>
						{#each items as item (item.value)}
							<Command.Item onSelect={() => toggleValue(item.value)}>
								<CheckIcon
									class={cn(
										'mr-2 size-4',
										value.includes(item.value) ? 'opacity-100' : 'opacity-0'
									)}
								/>
								{item.label}
							</Command.Item>
						{/each}
					</Command.Group>
				</Command.List>
			</Command.Root>
		</Popover.Content>
	</Popover.Root>
</SelectPrimitive.Root>
