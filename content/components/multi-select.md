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
