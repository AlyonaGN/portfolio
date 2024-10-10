<script>
	import picture from '$lib/images/Alena&Oxy.jpeg';
</script>

<section>
	<h1>Welcome!</h1>
	<figure>
		<img src={picture} alt="Alena and her fog" />
		<figcaption>This is me and my dog Oxy</figcaption>
	</figure>
</section>

<style>
	figure {
		margin: 0 auto;
		display: flex;
	}

	img {
		border-radius: 8px;
		width: 600px;
	}
</style>
