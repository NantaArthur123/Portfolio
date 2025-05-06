<script lang="ts">
	import CardName from '../lib/Components/CardName.svelte';
	import Contact from '../lib/Components/Contact.svelte';
	import Motto from '../lib/Components/Motto.svelte';
	import Project from '../lib/Components/Project.svelte';
	import Study from '../lib/Components/Study.svelte';
</script>

<div class="relative">
	<!-- Background -->
	<div
		class="bg-salt-400 dark:bg-midnight-500 pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(var(--color-salt-600)_1px,var(--color-salt-400)_1px)] bg-[size:20px_20px] dark:bg-[radial-gradient(var(--color-midnight-500)_1px,var(--color-midnight-900)_1px)]"
	></div>
</div>
<div class="flex flex-col gap-4">
	<div class="flex flex-wrap">
		<div
			class="dark:bg-midnight-500 bg-salt-100 flex min-w-[200px] items-center truncate rounded-md p-4"
		>
			<Motto />
		</div>
	</div>

	<!--  Change this later -->
	<CardName />
	<Study />
	<Project />
	<Contact />
</div>
