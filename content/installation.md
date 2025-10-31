---
title: Installation
description: How to install WDS Shadcn components in your project.
---

<script>
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
</script>

It doesn't matter what framework or package manager you are using. Installing WDS Shadcn components is as simple as running the `pnpm dlx shadcn-svelte@latest add https://wds-shadcn-registry-svelte.netlify.app/registry/<component>.json` command and replacing `<component>` with the name of the component you want to install.

The entire install process is handled by the `shadcn-svelte` CLI tool and works identically to how you would install any other Shadcn component.

### Example

<PMAddComp name="action-button" />
