import { browser } from '$app/environment';
import { parseUserConfig } from '$lib/user-config.svelte.js';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ data }) => {
	if (!browser) return data;

	return { ...data, userConfig: parseUserConfig(document.cookie) };
};
