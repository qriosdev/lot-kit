<script>
	export let data;
</script>

<h1>Category</h1>
<section>
	<div class="row">
		{#each data as { title, categories, coverImage, slug }}
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
