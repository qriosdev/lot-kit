<script context="module">
	export async function load({ fetch }) {
		const getPosts = await fetch(`/api/data.json?limit=100`);
		const posts = await getPosts.json();

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	export let posts;
</script>

<h1>Home</h1>

<section>
	<div class="row">
		{#each posts as { title, categories, coverImage, slug }}
			{@const category = categories[0]}
			<div>
				<img src={coverImage} alt="{title} | {category}" />
				<a href="/{slug}">
					<h2>{title}</h2>
				</a>
				<!-- <a href="/{category}">
					<p>{category}</p>
				</a> -->
			</div>
		{/each}
	</div>
</section>

<style>
	.row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		grid-gap: 1rem;
	}

	img {
		max-height: 20rem;
	}

	a {
		display: block;
	}
</style>
