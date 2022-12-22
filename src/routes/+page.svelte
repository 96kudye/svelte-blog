<script lang="ts">
	import type { PageData } from './$types';
	import Paper, { Title, Subtitle, Content } from '@smui/paper';
	export let data: PageData;
</script>

<svelte:head>
	<title>Silent Foreign Perspective</title>
</svelte:head>

<section>
	<div class="paper-container">
		{#each data.contents as content}
			<a href="/article/{content.id}" class="link_article">
				<Paper>
					<Title>{content.title}</Title>
					<Subtitle>{content.createdAt}</Subtitle>
					<Content>
                        Paper is used to build an elevated
						surface.asdfvilagsbdviujagbhwl;siergudfbklasjdhvbfckl.asjdgbfikjgbasikldfbhjvil;</Content>
				</Paper>
			</a>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
    .link_article {
        display: inline-block;
        width: 100%;
    }
	@media screen and (min-width: 720px) {
		.link_article {
			width: 700px;
		}
	}
	.paper-container .link_article {
		color: inherit;
		text-decoration: none;
	}
</style>
