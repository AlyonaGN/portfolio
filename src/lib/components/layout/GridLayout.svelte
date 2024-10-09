<script>
	export let gap = 0;
	export let templateAreas;
</script>

<div style="gap: {gap}; grid-template-areas: {templateAreas};" class="container">
	<slot />
</div>

<style>
	.container {
		display: grid;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
</style>
