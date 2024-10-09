<script>
	export let title;
</script>

<section>
	<a href={`/${title}`}>
		<h2>{title}</h2>
	</a>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 0.5px solid var(--darkgreen);
		font-size: 2em;
		cursor: pointer;
		background-color: var(--beige);
		color: var(--darkgreen);
		transition:
			background-color 0.35s ease,
			color 0.35s ease;
		height: 100%;
	}

	section:hover {
		background-color: var(--darkgreen);
		color: var(--beige);
	}

	a {
		color: var(--darkgreen);
	}

	section:hover a {
		color: var(--beige);
	}
</style>
