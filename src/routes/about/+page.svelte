<script>
	import { ABOUT_GREETING, ABOUT_INTERESTS, ABOUT_PERSONAL, ABOUT_PROFESSION } from './utils';
	import picture from '$lib/images/Alena&Oxy.jpeg';
</script>

<section class="container">
	<h1>{ABOUT_GREETING}</h1>
	<p>{ABOUT_PROFESSION}</p>
	<p>{ABOUT_PERSONAL}</p>
	<p>{ABOUT_INTERESTS}</p>
	<figure>
		<img src={picture} alt="Alena and her fog" />
		<figcaption>This is me and my dog Oxy</figcaption>
	</figure>
</section>

<style>
	figure {
		margin: 0 auto;
	}

	img {
		border-radius: 8px;
		width: 300px;
	}

	.container {
		max-width: 1200px;
		min-width: 280px;
		margin: 0 auto;
		padding: 0 1rem;
	}
</style>
