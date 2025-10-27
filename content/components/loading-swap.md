---
title: Loading Swap
description: Swaps child content with a loading spinner without changing the element size.
component: true
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";
	import Step from "$lib/components/step.svelte";
</script>

<ComponentPreview name="loading-swap-demo">

<div></div>

</ComponentPreview>

## Installation

<InstallTabs>
{#snippet cli()}
<PMAddComp name="loading-swap" />
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
	import { LoadingSwap } from '$lib/components/ui/loading-swap';
</script>

<LoadingSwap isLoading>Search</LoadingSwap>
```

## Examples

### Large components

<ComponentPreview name="loading-swap-large">

<div></div>

</ComponentPreview>
