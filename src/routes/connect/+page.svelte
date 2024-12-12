<script lang="ts">
	import PageContainer from '../components/PageContainer.svelte';
	import { CONTACTS, CONTTACTS_TITLE } from './utils';
</script>

<PageContainer>
	<h1>{CONTTACTS_TITLE}</h1>
	<ul>
		{#each CONTACTS as contact}
			<li><a target="”_blank”" href={contact.link}>{contact.name}</a></li>
		{/each}
	</ul>
</PageContainer>

<style>
	h1 {
		text-align: center;
	}

	ul {
		list-style-type: square;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	li {
		margin: 10px 0;
	}

	a {
		text-decoration: none;
		color: var(--darkgreen);
	}
</style>
