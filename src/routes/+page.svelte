<script lang="ts">
	import type { PageData } from './$types';

	import PageHead from '$lib/components/PageHead.svelte';
	import Article from '$lib/components/Article.svelte';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleDescription from '$lib/components/ArticleDescription.svelte';

	export let data: PageData;
</script>

<PageHead title="Home" description="An awesome blog about PDA" />

<p>
	Yes, I made a website 🙈
</p>

{#each data.posts as { slug, title, author, description, date }}
	<Article>
		<ArticleTitle {slug} {title} />
		<ArticleDescription {description} {slug} />
	</Article>
{/each}

<slot />
