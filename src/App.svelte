<script>
	import { onMount } from "svelte";
	import { apiData, drinkNames } from './store.js';

	onMount(async () => {
	fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon")
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
	<h1>Whiskey Drinks Menu</h1>
	<ul>
	{#each $drinkNames as drinkName}
		<li>{drinkName}</li>
	{/each}
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