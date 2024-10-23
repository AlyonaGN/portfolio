<script>
	import { ABOUT_GREETING, ABOUT_INTERESTS, ABOUT_PERSONAL, ABOUT_PROFESSION } from './utils';
	import mainPicture from '$lib/images/Alena&Oxy.jpeg';
	import Image from '$lib/components/Image/Image.svelte';
	import familyPic from '$lib/images/family.jpeg';
</script>

<section class="container beige">
	<Image --float="right" src={mainPicture} alt="Alena and her fog" width="300px" />
	<h1>{ABOUT_GREETING}</h1>
	<p>{ABOUT_PROFESSION}</p>
	<Image src={familyPic} alt="Alena's family" --float="left" width="300px" />
	<p>{ABOUT_PERSONAL}</p>
	<p>{ABOUT_INTERESTS}</p>
</section>

<style>
	.container {
		max-width: 1200px;
		min-width: 280px;
		margin: 0 auto;
		padding: 30px;
		display: flow-root;
	}
</style>
