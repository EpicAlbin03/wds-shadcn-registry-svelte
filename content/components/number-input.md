---
title: Number Input
description: An input that returns a number value and automatically handles invalid inputs.
component: true
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";
	import Step from "$lib/components/step.svelte";
</script>

<ComponentPreview name="number-input-demo">

<div></div>

</ComponentPreview>

## Installation

<InstallTabs>
{#snippet cli()}
<PMAddComp name="number-input" />
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
	import { NumberInput, NumberInputGroup } from '$lib/components/ui/number-input';
	import * as InputGroup from '$lib/components/ui/input-group/index.js';

	let value = $state<number | null>(null);
</script>

<NumberInput bind:value />
// Or
<InputGroup.Root>
	<NumberInputGroup bind:value />
</InputGroup.Root>
```

## Examples

### With Input Group

<ComponentPreview name="number-input-group">

<div></div>

</ComponentPreview>

### Form

<ComponentPreview name="number-input-form">

<div></div>

</ComponentPreview>
