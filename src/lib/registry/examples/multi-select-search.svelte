<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { MultiSelect } from '$lib/registry/ui/multi-select';

	const frameworks = [
		{ value: 'next.js', label: 'Next.js' },
		{ value: 'sveltekit', label: 'SvelteKit' },
		{ value: 'nuxt.js', label: 'Nuxt.js' },
		{ value: 'remix', label: 'Remix' },
		{ value: 'astro', label: 'Astro' },
		{ value: 'vue', label: 'Vue.js' },
		{ value: 'react', label: 'React' }
	];
</script>

<div class="flex w-[400px] flex-col gap-8">
	<div class="flex flex-col gap-2">
		<Label>Disabled Search</Label>
		<MultiSelect items={frameworks} disableSearch class="w-[400px]" />
	</div>

	<div class="flex flex-col gap-2">
		<Label>Customized Search</Label>
		<MultiSelect
			items={frameworks}
			placeholderSearch="Search frameworks..."
			emptySearchMessage="No frameworks found"
			class="w-[400px]"
		/>
	</div>
</div>
