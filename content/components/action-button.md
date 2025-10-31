---
title: Action Button
description: A button that performs an action when clicked and optionally asks for user confirmation.
component: true
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";
	import Step from "$lib/components/step.svelte";
</script>

<ComponentPreview name="action-button-demo">

<div></div>

</ComponentPreview>

## Installation

<InstallTabs>
{#snippet cli()}
<PMAddComp name="action-button" />
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
	import { ActionButton } from '$lib/components/action-button';
	import { updateSettings } from '$lib/actions/settings';

	const settings = { name: 'Kyle' };
</script>

<ActionButton action={updateSettings.bind(null, settings)} requireAreYouSure>
	Save Settings
</ActionButton>
```

## Examples

### Default

<ComponentPreview name="action-button-default">

<div></div>

</ComponentPreview>

### Require Are You Sure

<ComponentPreview name="action-button-are-you-sure">

<div></div>

</ComponentPreview>

### With Error

<ComponentPreview name="action-button-error">

<div></div>

</ComponentPreview>
