<script lang="ts">
	import '../app.css';
	import Navbar from '../lib/Components/Navbar.svelte';
	let { children } = $props();
</script>

<Navbar />
<div class="mx-auto mb-16 p-5 md:ml-56">
	{@render children()}
</div>
