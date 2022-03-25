<script>
	import { onMount } from "svelte";
	import { apiData, content } from './store.js';

	onMount(async () => {
	fetch("http://localhost:8080")
	.then(response => console.log(response))
	.then(response => response.json())
	.then(data => {
			console.log(data);
		apiData.set(data);
	}).catch(error => {
		console.log(error);
		return [];
	});
	});
</script>

<main>
	<h1>Test</h1>
	<ul>
	<!-- {#each $drinkNames as drinkName} -->
		<!-- <li>{drinkName}</li> -->
	<!-- {/each} -->
	<li>{content}</li>
	</ul>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>