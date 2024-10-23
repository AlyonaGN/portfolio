<script>
	export let src;
	export let alt;
	export let width;
</script>

<img {src} {alt} style={width} />

<style>
	img {
		width: 300px;
		margin: 0 15px;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
		float: var(--float, none);
	}
</style>
