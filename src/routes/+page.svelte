<svelte:head>
	<title>Home</title>
	<meta name="Alena" content="Alena's Portfolio" />
</svelte:head>

<section>
	<div class="container">
		<button class="about">ABOUT</button>
		<button class="connect">CONNECT</button>
		<button class="stack">MY STACK</button>
		<button class="projects">MY PROJECTS</button>
	</div>
</section>

<style>
	.container {
		display: grid;
		grid-template-areas:
			'about about about connect'
			'about about about connect'
			'stack projects projects projects'
			'stack projects projects projects';
		gap: 0;
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
	}

	.about,
	.connect,
	.projects,
	.stack {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 0.5px solid rgb(4, 49, 34);
		font-size: 2em;
		cursor: pointer;
		background-color: rgb(231, 233, 206);
		color: rgb(4, 49, 34);
		transition:
			background-color 0.35s ease,
			color 0.35s ease;
	}

	.about:hover,
	.connect:hover,
	.projects:hover,
	.stack:hover {
		background-color: rgb(4, 49, 34);
		color: rgb(231, 233, 206);
	}

	.about {
		grid-area: about;
	}

	.projects {
		grid-area: projects;
	}

	.stack {
		grid-area: stack;
	}

	.connect {
		grid-area: connect;
	}
</style>
