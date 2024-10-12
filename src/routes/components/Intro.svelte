<script>
	import { FULL_NAME, ROLE } from '../utils';
</script>

<section>
	<h1>{FULL_NAME}</h1>
	<h3>{ROLE}</h3>
</section>

<style>
	section {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 6px;
		background-color: var(--beige);
		color: var(--darkgreen);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		line-height: 1.1;
		padding: 20px;
		box-sizing: border-box;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	h1 {
		margin: 10px;
	}
	h3 {
		margin: 4px;
	}
</style>
