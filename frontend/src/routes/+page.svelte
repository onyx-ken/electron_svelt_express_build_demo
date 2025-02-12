<script>
	import { writable } from 'svelte/store';
	import HomePage from './HomePage.svelte';
	import AboutPage from './AboutPage.svelte';
	import PingTestPage from './PingTestPage.svelte';
	import {onMount} from "svelte";

	let currentPage = writable();

	function setPage(page) {
		currentPage.set(page);
	}

	onMount(() => {
		setPage('home');
	})
</script>

<header>
	<nav>
		<ul>
			<li><a href="#" on:click={() => setPage('home')}>Home</a></li>
			<li><a href="#" on:click={() => setPage('about')}>About</a></li>
			<li><a href="#" on:click={() => setPage('ping-test')}>Ping Test</a></li>
		</ul>
	</nav>
</header>

<main>
	{#if $currentPage === 'home'}
		<HomePage />
	{:else if $currentPage === 'about'}
		<AboutPage />
	{:else if $currentPage === 'ping-test'}
		<PingTestPage />
	{/if}
</main>

<style>
	header {
		display: flex;
		justify-content: center;
		padding: 1rem;
		background: #f4f4f4;
	}

	nav ul {
		list-style: none;
		display: flex;
		gap: 20px;
		padding: 0;
	}

	nav li {
		display: inline;
	}

	nav a {
		text-decoration: none;
		font-weight: bold;
		color: #333;
		cursor: pointer;
	}

	nav a:hover {
		color: #ff3e00;
	}

	main {
		padding: 2rem;
	}
</style>
