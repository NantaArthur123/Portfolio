<script lang="ts">
	import { onMount } from 'svelte';

	let displayedText = '';
	let showMotto = false;

	const mottos = [
		'To feel what dream is like.',
		'To learn what dream lead us.',
		'To reach the dream.'
	];

	let mottoIndex = 0;
	let charIndex = 0;

	const typingSpeed = 20; // ms per character
	const pauseBetweenMottos = 6000; // ms pause after one motto !!DONT CHANGE OR WILL BROKE THE ANIMATION LMAOOOO

	let timer1: number;
	let timer2: number;

	const typeNextChar = () => {
		if (charIndex < mottos[mottoIndex].length) {
			displayedText += mottos[mottoIndex][charIndex++];
			timer1 = window.setTimeout(typeNextChar, typingSpeed);
		} else {
			timer2 = window.setTimeout(() => {
				displayedText = '';
				charIndex = 0;
				mottoIndex = (mottoIndex + 1) % mottos.length;
				typeNextChar();
			}, pauseBetweenMottos);
		}
	};

	onMount(() => {
		const loadTime = performance.now() / 1000;
		let result = '';

		if (loadTime < 0.5) result = 'wow!';
		else if (loadTime > 2) result = 'hmm..';

		displayedText = `Page loaded in ${loadTime.toFixed(2)}s${result ? ', ' + result : ''}`;

		setTimeout(() => {
			displayedText = '';
			showMotto = true;
			typeNextChar();
		}, pauseBetweenMottos);

		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	});
</script>

<div class="motto">
	<h1 class="text-xl leading-none font-extrabold tracking-tight md:text-2xl lg:text-3xl">
		{displayedText}<span class="cursor">|</span>
	</h1>
</div>

<style>
	.cursor {
		display: inline-block;
		width: 1ch;
		animation: blink 1s steps(1) infinite;
	}
	/* Typing anim */
	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		50.01%,
		100% {
			opacity: 0;
		}
	}
</style>
