<script lang="ts" module>
	import { z } from 'zod/v4';

	const formSchema = z.object({
		favoriteFrameworks: z.array(z.string()).min(1, 'Required')
	});
</script>

<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/ui/form/index.js';
	import { toast } from 'svelte-sonner';
	import { MultiSelect } from '$lib/registry/ui/multi-select';

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		resetForm: false,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success(`You submitted ${JSON.stringify(f.data, null, 2)}`);
			} else {
				toast.error('Please fix the errors in the form.');
			}
		}
	});

	const { form: formData, enhance } = form;

	const frameworks = [
		{ value: 'next.js', label: 'Next.js' },
		{ value: 'sveltekit', label: 'SvelteKit' },
		{ value: 'nuxt.js', label: 'Nuxt.js' },
		{ value: 'remix', label: 'Remix' },
		{ value: 'astro', label: 'Astro' },
		{ value: 'vue', label: 'Vue.js' },
		{ value: 'react', label: 'React' }
	];
</script>

<form method="POST" class="w-2/3 space-y-6" use:enhance>
	<Form.Field {form} name="favoriteFrameworks">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Favorite Frameworks</Form.Label>
				<MultiSelect
					{...props}
					bind:value={$formData.favoriteFrameworks}
					items={frameworks}
					placeholder="Select frameworks..."
					class="w-[400px]"
				/>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>
