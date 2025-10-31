---
title: Multi-Select
description: A multi-select input that emulates the Shadcn Select component as closely as possible.
component: true
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";
	import Step from "$lib/components/step.svelte";
</script>

<ComponentPreview name="multi-select-demo">

<div></div>

</ComponentPreview>

## Installation

<InstallTabs>
{#snippet cli()}
<PMAddComp name="multi-select" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

Copy and paste the component source files linked at the top of this page into your project.

</Step>

</Steps>
{/snippet}
</InstallTabs>

## Usage

```svelte
<script lang="ts">
	import { MultiSelect } from '$lib/components/multi-select';

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

<MultiSelect
	bind:value
	items={frameworks}
	placeholder="Select frameworks..."
	placeholderSearch="Search frameworks..."
	emptySearchMessage="No frameworks found"
	overflowBehavior="wrap-when-open"
	disableSearch
	class="w-[400px]"
/>
```

## Examples

### Customize Badges

<ComponentPreview name="multi-select-custom-badges">

<div></div>

</ComponentPreview>

### Overflow Behavior

<ComponentPreview name="multi-select-overflow">

<div></div>

</ComponentPreview>

### Search Configuration

<ComponentPreview name="multi-select-search">

<div></div>

</ComponentPreview>

### Form

<ComponentPreview name="multi-select-form">

<div></div>

</ComponentPreview>
