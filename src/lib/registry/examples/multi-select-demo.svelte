<script lang="ts">
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

	let value = $state<string[]>([]);
</script>

<MultiSelect bind:value items={frameworks} placeholder="Select frameworks..." class="w-[400px]" />
