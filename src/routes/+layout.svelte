<script>
	import '../app.css';
	import Intro from './components/Intro.svelte';
</script>

<main>
	<slot />
	<Intro />
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		position: relative;
	}
</style>
