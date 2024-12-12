<script>
	import { ABOUT_GREETING, ABOUT_INTERESTS, ABOUT_PERSONAL, ABOUT_PROFESSION } from './utils';
	import mainPicture from '$lib/images/Alena&Oxy.jpeg';
	import Image from '$lib/components/Image/Image.svelte';
	import familyPic from '$lib/images/family.jpeg';
	import PageContainer from '../components/PageContainer.svelte';
</script>

<PageContainer>
	<Image --float="right" src={mainPicture} alt="Alena and her fog" width="300px" />
	<h1>{ABOUT_GREETING}</h1>
	<p>{ABOUT_PROFESSION}</p>
	<Image src={familyPic} alt="Alena's family" --float="left" width="300px" />
	<p>{ABOUT_PERSONAL}</p>
	<p>{ABOUT_INTERESTS}</p>
</PageContainer>
