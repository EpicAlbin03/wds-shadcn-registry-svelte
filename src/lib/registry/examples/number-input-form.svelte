<script lang="ts" module>
	import { z } from 'zod/v4';

	const formSchema = z.object({
		age: z.number().min(1),
		favoriteNumber: z.number().min(1).max(100).nullable()
	});
</script>

<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/ui/form/index.js';
	import { toast } from 'svelte-sonner';
	import { NumberInput } from '$lib/registry/components/number-input';

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
</script>

<form method="POST" class="w-2/3 space-y-6" use:enhance>
	<Form.Field {form} name="age">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Age</Form.Label>
				<NumberInput {...props} bind:value={$formData.age} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="favoriteNumber">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Favorite Number</Form.Label>
				<NumberInput {...props} bind:value={$formData.favoriteNumber} />
			{/snippet}
		</Form.Control>
		<Form.Description>Optional</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>
