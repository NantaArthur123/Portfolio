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

	const flipDurationMs = 100; // for flip anim, bigger = longer

	// Code taken from https://github.com/isaacHagoel/svelte-dnd-action but changed to typescript, credit to original owner
	$: filter = filterBox.length
		? project.filter((p) => filterBox.every((t) => p.tags.includes(t.id)))
		: project;

	const update = (e: CustomEvent<DndEvent<Tag>>, target: 'pool' | 'filter') => {
		if (target === 'pool') tagPool = e.detail.items as Tag[];
		else filterBox = e.detail.items as Tag[];
	};
</script>

<div class="container mx-auto p-6" id="project">
	<section class="mb-6">
		<h2 class="text-xl font-bold">Tags</h2>
		<p class="mb-2 text-xs">(Drag and drop to filter box :D)</p>
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
			<!-- 1. Still use CSS columns for masonry -->
			<div class="columns-2 gap-6 space-y-6 sm:columns-3 lg:columns-4">
				{#each filter as project (project.id)}
					<!-- 2. Card itself is break-inside-avoid, but no fixed heights anywhere -->
					<div
						class="mb-6 break-inside-avoid overflow-hidden rounded-lg shadow-md transition hover:shadow-lg"
					>
						<!-- 3. Make the image container RELATIVE so we can absolutely-position both the gradient and text -->
						{#if !imageError[project.id]}
							<div class="relative w-full rounded">
								<!-- Let the img size itself naturally -->
								<img
									src={project.img}
									alt={project.name}
									class="block h-auto min-h-72 w-full rounded object-cover"
								/>

								<!-- 4. Bottom fade -->
								<div
									class="from-salt-600/70 absolute inset-x-0 bottom-0 h-52 rounded bg-gradient-to-t to-transparent dark:from-black/80"
								></div>

								<!-- 5. Overlay your title + badges/text on top of that fade -->
								<div class="absolute right-4 bottom-4 left-4">
									<h3 class="text-shadow-salt-100 text-shadow text-lg leading-snug font-bold">
										{project.name}
									</h3>

									<div
										class={`mt-2 inline-block rounded px-2 py-1 text-xs ${
											project.source ? 'bg-bee-500 text-salt-text' : 'bg-ash-100 text-salt-text'
										}`}
									>
										{project.source ? 'Open Source' : 'Closed Source'}
									</div>

									<div class="mt-2 flex flex-wrap gap-1">
										{#each project.tags as tid}
											<span
												class="bg-salt-400 dark:bg-midnight-900 rounded px-2 py-1 text-xs transition"
											>
												{getTagName(tid, tagPool, filter)}
											</span>
										{/each}
									</div>
								</div>
							</div>
						{:else}
							<!-- fallback placeholder stays same -->
							<div
								class="flex h-48 w-full items-center justify-center bg-gray-200 dark:bg-gray-700"
							>
								…svg…
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</section>
</div>
