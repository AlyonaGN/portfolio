<script>
	import GridElement from '$lib/components/layout/GridElement.svelte';
	import GridLayout from '$lib/components/layout/GridLayout.svelte';
	import MainSection from './components/MainSection.svelte';
	import { mainGridGap, mainGridTemplate, TITLES } from './util';
</script>

<svelte:head>
	<title>Alena's Portfolio</title>
	<meta name="Alena" content="Alena's Portfolio" />
</svelte:head>

<GridLayout gap={mainGridGap} templateAreas={mainGridTemplate}>
	{#each TITLES as title}
		<GridElement areaName={title}>
			<MainSection {title} />
		</GridElement>
	{/each}
</GridLayout>
