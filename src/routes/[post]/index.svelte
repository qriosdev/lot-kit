<script context="module">
	export async function load({ fetch, params }) {
		const { post } = params;

		// const request = await fetch(`/api/data.json?article=${post}`);
		// const response = await request.json();

		const data = await import(`../../lib/content/posts/${post}.md`);

		return {
			props: {
				content: data.default,
				title: data.metadata.title,
				date: data.metadata.date,
				category: data.metadata.categories[0],
				image: data.metadata.coverImage,
				slug: post
			}
		};
	}
</script>

<script>
	export let content, title, date, category, image, slug;
</script>

<img src={image} alt="{title} | {category}" />
<h1>{title}</h1>
<p>{category}</p>
<p>{date}</p>
<p>{slug}</p>

<svelte:component this={content} />
