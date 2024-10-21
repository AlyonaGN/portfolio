<script>
	import { ABOUT_GREETING, ABOUT_INTERESTS, ABOUT_PERSONAL, ABOUT_PROFESSION } from './utils';
	import picture from '$lib/images/Alena&Oxy.jpeg';
</script>

<section class="container beige">
	<img src={picture} alt="Alena and her fog" />
	<h1>{ABOUT_GREETING}</h1>
	<p>{ABOUT_PROFESSION}</p>
	<p>{ABOUT_PERSONAL}</p>
	<p>{ABOUT_INTERESTS}</p>
</section>

<style>
	img {
		width: 300px;
		float: right;
		margin: 0 15px;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
	}

	.container {
		max-width: 1200px;
		min-width: 280px;
		margin: 0 auto;
		padding: 30px;
	}
</style>
