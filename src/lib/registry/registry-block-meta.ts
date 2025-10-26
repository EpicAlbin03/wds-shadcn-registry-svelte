import { type BlockName } from '$lib/blocks';

type BlockMeta = {
	iframeHeight?: string;
	className?: string;
	description: string;
	mobile?: 'component';
};

export const blockMeta = {
	'action-button': {
		description: 'test'
	}
} as Record<BlockName, BlockMeta>;
