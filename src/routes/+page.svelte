<svelte:head>
	<title>Home</title>
	<meta name="Alena" content="Alena's Portfolio" />
</svelte:head>

<section>
	<div class="container">
		<div class="work">ABOUT</div>
		<div class="connect">CONNECT</div>
		<div class="about">MY PROJECTS</div>
		<div class="community">MY STACK</div>
	</div>
</section>

<style>
	html,
	body {
		margin: 0;
		padding: 0;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 10px; /* Adds spacing between the rectangles */
		width: 70vw;
		height: 70vh;
	}

	.work {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid black;
		font-size: 2em;
	}

	.connect {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid black;
		font-size: 2em;
	}

	.about {
		grid-column: 1 / 2;
		grid-row: 2 / 3;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid black;
		font-size: 2em;
	}

	.community {
		grid-column: 2 / 3;
		grid-row: 2 / 4;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid black;
		font-size: 2em;
	}

	.milli {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid black;
		background-color: #ffeb3b;
		font-size: 2em;
		font-weight: bold;
	}
</style>
