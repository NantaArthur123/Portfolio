<script lang="ts">
	import { projects as ip, tagPool as itp } from '$lib/data';
	import type { Project, Tag } from '$lib/datatype';
	import { getTagName } from '$lib/func';
	import { dndzone, type DndEvent } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';

	/// ip = initial project; itp = initial tagpool
	let project: Project[] = [...ip];
	let tagPool: Tag[] = [...itp];
	let filterBox: Tag[] = [];
	let imageError: Record<number, boolean> = {};

	const flipDurationMs = 300; // for flip anim, bigger = longer

	// Code taken from https://github.com/isaacHagoel/svelte-dnd-action but changed to typescript, credit to original owner
	$: filter = filterBox.length
		? project.filter((p) => filterBox.every((t) => p.tags.includes(t.id)))
		: project;

	const update = (e: CustomEvent<DndEvent<Tag>>, target: 'pool' | 'filter') => {
		if (target === 'pool') tagPool = e.detail.items as Tag[];
		else filterBox = e.detail.items as Tag[];
	};
</script>

<div class="container mx-auto p-6">
	<section class="mb-6">
		<h2 class="mb-2 text-xl font-bold">Available Tags</h2>
		<div
			use:dndzone={{
				items: tagPool,
				type: 'tag',
				flipDurationMs,
				dropFromOthersDisabled: false
			}}
			on:consider={(e) => update(e, 'pool')}
			on:finalize={(e) => update(e, 'pool')}
			class="grid grid-cols-2 gap-2 md:grid-cols-4"
		>
			{#each tagPool as tag (tag.id)}
				<button
					class="tag-button bg-salt-100 dark:bg-midnight-500 rounded p-2 text-xs shadow hover:shadow-md"
					data-id={tag.id}
					animate:flip={{ duration: flipDurationMs }}
				>
					{tag.name}
				</button>
			{/each}
		</div>
	</section>

	<section class="mb-6">
		<h2 class="mb-2 text-xl font-bold">Filter Box</h2>
		<div
			use:dndzone={{
				items: filterBox,
				type: 'tag',
				flipDurationMs,
				dropFromOthersDisabled: false
			}}
			on:consider={(e) => update(e, 'filter')}
			on:finalize={(e) => update(e, 'filter')}
			class="flex min-h-[100px] flex-wrap gap-2 rounded border-2 border-dashed p-4"
		>
			{#if filterBox.length === 0}
				<p class="text-sm italic">Drag tags here to filter projects</p>
			{:else}
				{#each filterBox as tag (tag.id)}
					<button
						class=" bg-bee-500 text-salt-text flex items-center gap-1 rounded p-2 text-xs shadow"
						data-id={tag.id}
						animate:flip={{ duration: flipDurationMs }}
					>
						{tag.name}
					</button>
				{/each}
			{/if}
		</div>
	</section>

	<section>
		<h2 class="mb-4 text-xl font-bold">Project Gallery</h2>
		{#if filter.length === 0}
			<div class="bg-salt-100 dark:bg-midnight-500 rounded-lg py-10 text-center">
				<p>No projects match your filter criteria</p>
			</div>
		{:else}
			<div class="columns-2 gap-6 space-y-6 sm:columns-3 lg:columns-6">
				{#each filter as project (project.id)}
					<div
						class="bg-salt-100 dark:bg-midnight-500 mb-6 break-inside-avoid overflow-hidden rounded-lg shadow-md transition hover:shadow-lg"
					>
						{#if !imageError[project.id]}
							<img src={project.img} alt={project.name} class="w-full object-cover" />
						{:else}
							<div
								class="flex h-48 w-full items-center justify-center bg-gray-200 dark:bg-gray-700"
							>
								<svg
									class="h-10 w-10 text-gray-400 dark:text-gray-600"
									fill="currentColor"
									viewBox="0 0 20 18"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
									/>
								</svg>
							</div>
						{/if}

						<div class="p-4">
							<div class="mb-2 flex items-center justify-between">
								<h3 class="text-lg font-bold">{project.name}</h3>
								<span
									class={`rounded-full px-2 py-1 text-xs ${
										project.source ? 'bg-bee-500 text-salt-text' : 'bg-ash-100 text-salt-text'
									}`}
								>
									{project.source ? 'Open Source' : 'Closed Source'}
								</span>
							</div>
							<div class="flex flex-wrap gap-1">
								{#each project.tags as tid}
									<span class="bg-salt-400 dark:bg-midnight-900 rounded px-2 py-1 text-xs">
										{getTagName(tid, tagPool, filter)}
									</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</section>
</div>
