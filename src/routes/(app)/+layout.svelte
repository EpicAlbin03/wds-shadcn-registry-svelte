<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import TailwindIndicator from '$lib/components/tailwind-indicator.svelte';
	import { UserConfig, UserConfigContext } from '$lib/user-config.svelte';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import SiteHeader from '$lib/components/site-header.svelte';
	import SiteFooter from '$lib/components/site-footer.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { sidebarNavItems } from '$lib/navigation.js';
	import DocsSidebar from '$lib/components/docs-sidebar.svelte';

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
			<div class="container-wrapper flex flex-1 flex-col px-2">
				<Sidebar.Provider
					class="min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)] 3xl:fixed:container 3xl:fixed:px-3"
				>
					<DocsSidebar navItems={sidebarNavItems} />
					<div class="h-full w-full">{@render children()}</div>
				</Sidebar.Provider>
			</div>
		</Tooltip.Provider>
	</main>
	<SiteFooter />
</div>
