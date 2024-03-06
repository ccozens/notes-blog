<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<a href="/"><h1 class:small={$page.url.pathname !== '/'}>PDA Notes</h1></a>
</header>

<main>
	<slot />
</main>


<style>
	:global(:root) {
		--spacing-unit: 4px;
		--color-background: oklch(15% 0.1 268);
		--color-background-secondary: oklch(20% 0.1 268);
		--color-text-primary: oklch(95% 0.03 82);
		--color-text-secondary: oklch(90% 0.5 82);
	}

	:global(body) {
		margin: 0 auto;
		max-width: 75ch;
		padding: calc(var(--spacing-unit) * 8);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		background-color: var(--color-background);
		color: var(--color-text-primary);
		line-height: 1.5;
		font-size: 1.2rem;
	}

	:global(a, a:visited, a:active) {
		text-decoration: none;
		color: var(--color-text-primary);
		font-weight: 700;
	}

	:global(a:hover) {
		text-decoration: underline;
	}

	:global(img) {
		max-width: 100%;
	}

	.small {
		font-size: 1.6rem;
	}

	footer {
		margin-top: calc(var(--spacing-unit) * 8);
	}
</style>
