<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { LoadingSwap } from '$lib/registry/ui/loading-swap';

	let isLoading = $state(false);
</script>

<div class="flex flex-col gap-2">
	<Button onclick={() => (isLoading = !isLoading)} class="w-fit">Toggle Loading</Button>
	<Card class="w-96">
		<LoadingSwap {isLoading}>
			<CardHeader>
				<CardTitle>Larger Component</CardTitle>
				<CardDescription>Can be used to wrap any components</CardDescription>
			</CardHeader>
		</LoadingSwap>
	</Card>
</div>
