<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { MultiSelect } from '$lib/registry/ui/multi-select';
	import * as Select from '$lib/components/ui/select';

	const frameworks = [
		{ value: 'next.js', label: 'Next.js' },
		{ value: 'sveltekit', label: 'SvelteKit' },
		{ value: 'nuxt.js', label: 'Nuxt.js' },
		{ value: 'remix', label: 'Remix' },
		{ value: 'astro', label: 'Astro' },
		{ value: 'vue', label: 'Vue.js' },
		{ value: 'react', label: 'React' }
	];

	const overflowBehavior = ['wrap-when-open', 'wrap', 'cutoff'] as const;
	type OverflowBehavior = (typeof overflowBehavior)[number];

	let value = $state<string[]>([]);
	let selectValue = $state<OverflowBehavior>('wrap-when-open');
</script>

<div class="flex w-[400px] flex-col gap-8">
	<div class="flex flex-col gap-2">
		<Label>Overflow Behavior</Label>
		<Select.Root type="single" bind:value={selectValue}>
			<Select.Trigger class="w-[180px]">
				{selectValue}
			</Select.Trigger>
			<Select.Content>
				{#each overflowBehavior as item}
					<Select.Item value={item}>{item}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
	</div>

	<div class="flex flex-col gap-2">
		<Label>Frameworks</Label>
		<MultiSelect
			bind:value
			items={frameworks}
			overflowBehavior={selectValue}
			placeholder="Select frameworks..."
			class="w-[400px]"
		/>
	</div>
</div>
