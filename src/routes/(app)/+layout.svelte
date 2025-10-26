<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import TailwindIndicator from '$lib/components/tailwind-indicator.svelte';
	import { UserConfig, UserConfigContext } from '$lib/user-config.svelte';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import * as Tooltip from '$lib/registry/ui/tooltip/index.js';

	let { children, data } = $props();

	const userConfig = UserConfigContext.set(new UserConfig(data.userConfig));

	const themeColors = { light: '#ffffff', dark: '#09090b' };
</script>

<ModeWatcher defaultMode="system" disableTransitions {themeColors} />
<Toaster position="top-center" />
<TailwindIndicator />

<div class="relative z-10 flex min-h-svh flex-col bg-background">
	<SiteHeader />
	<main class="flex flex-1 flex-col">
		<Tooltip.Provider>
			{@render children()}
		</Tooltip.Provider>
	</main>
	<SiteFooter />
</div>
