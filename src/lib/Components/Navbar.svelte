<script lang="ts">
	import { switchLight } from '$lib/theme';
	// Importing the CSS that is in the same folder

	let isMenuOpen = false; // For mobile click thingy
</script>

<!-- Mobile first brodii :DD -->
<nav
	class="dark:bg-midnight-500 bg-salt-100 fixed right-0 bottom-0 left-0 z-10 flex items-center justify-around border-t-2 border-yellow-400 py-3 text-sm font-bold md:hidden"
>
	<a href="/" class="hover:text-yellow-400 dark:text-white">./INDEX</a>
	<a href="#project" class="hover:text-yellow-400 dark:text-white">./PROJECT</a>
	<div class="relative">
		<button
			on:click={() => (isMenuOpen = !isMenuOpen)}
			class="hover:text-yellow-400 dark:text-white"
		>
			./CONTACT
		</button>
		{#if isMenuOpen}
			<div
				class="bg-salt-100 absolute bottom-10 left-1/2 w-32 -translate-x-1/2 transform rounded-md py-2 text-center shadow-lg dark:bg-gray-700"
			>
				<a
					href="/"
					target="_blank"
					class="block px-4 py-2 hover:bg-yellow-100 dark:hover:bg-gray-600">LinkedIn</a
				>
				<a
					href="/"
					target="_blank"
					class="block px-4 py-2 hover:bg-yellow-100 dark:hover:bg-gray-600">Github</a
				>
			</div>
		{/if}
	</div>
	<button
		on:click={switchLight}
		class=" rounded-full bg-gray-200 p-2 hover:bg-yellow-300 dark:bg-gray-700 dark:hover:bg-yellow-400"
	>
		🌓
	</button>
</nav>

<!-- DESKTOP MASTER RACEEEEEEE -->
<aside
	class="dark:bg-midnight-500 bg-salt-100 fixed top-0 left-0 hidden h-screen w-56 flex-col justify-between border-r-4 border-yellow-400 px-4 py-6 md:flex"
>
	<div class="flex flex-col space-y-6 text-lg font-bold">
		<a href="/" class="hover:text-yellow-400 dark:text-white">./INDEX</a>
		<a href="/" class="hover:text-yellow-400 dark:text-white">./PROJECT</a>

		<div>
			<button
				on:click={() => (isMenuOpen = !isMenuOpen)}
				class="flex w-full items-center justify-between hover:text-yellow-400 dark:text-white"
			>
				<span>./CONTACT</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 transform transition-transform duration-300"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class:rotate-180={isMenuOpen}
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>
			{#if isMenuOpen}
				<div class="mt-2 flex flex-col space-y-2">
					<a
						href="/"
						target="_blank"
						class="m-2 text-gray-600 hover:text-yellow-400 dark:text-gray-300 dark:hover:text-yellow-400"
						>LinkedIn</a
					>
					<a
						href="/"
						target="_blank"
						class="m-2 text-gray-600 hover:text-yellow-400 dark:text-gray-300 dark:hover:text-yellow-400"
						>Github</a
					>
				</div>
			{/if}
		</div>

		<button
			on:click={switchLight}
			class="flex w-full items-center justify-between hover:text-yellow-400 dark:text-white"
		>
			./SWITCH_LIGHT.TS
		</button>
	</div>
</aside>
