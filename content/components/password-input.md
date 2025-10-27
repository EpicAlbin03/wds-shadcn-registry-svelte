---
title: Password Input
description: An input that can toggle visibility of the password text and check the strength of the password.
component: true
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";
	import Step from "$lib/components/step.svelte";
</script>

<ComponentPreview name="password-input-demo">

<div></div>

</ComponentPreview>

## Installation

<InstallTabs>
{#snippet cli()}
<PMAddComp name="password-input" />
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
	import { PasswordInput } from '$lib/registry/ui/password-input';
</script>

<PasswordInput />
// Or
<PasswordInput variant="strength" />
```

## Examples

### With Strength Checker

<ComponentPreview name="password-input-strength">

<div></div>

</ComponentPreview>

### Form

<ComponentPreview name="password-input-form">

<div></div>

</ComponentPreview>
