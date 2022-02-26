<script>
	export let posts;
</script>

<!-- <section>
	<div class="row">
		{posts}
	</div>
</section> -->

<!-- <script context="module">
	export async function load({ fetch, params }) {
		const { category } = params;

		const categories = await (await fetch(`/api/categories.json`)).json();
		const isCategory = categories.includes(category);

		if (isCategory) {
			const posts = await (await fetch(`/api/data.json?limit=100&category=${category}`)).json();

			if (!!posts[0]) {
				return {
					props: {
						posts
					}
				};
			}
		}

		return { fallthrough: true };
	}
</script> -->

<!-- <script>
	export let posts;
	console.log(posts);
</script> -->

<h1>Category</h1>
<section>
	<div class="row">
		{#each posts as { title, categories, coverImage, slug }}
			{@const category = categories[0]}
			<div>
				<img src={coverImage} alt="{title} | {category}" />
				<a href="/{slug}">
					<h2>{title}</h2>
				</a>
				<a href="/{category}">
					<p>{category}</p>
				</a>
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
