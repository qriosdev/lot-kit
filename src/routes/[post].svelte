<script context="module">
	export async function load({ params }) {
		const { post } = params;
		const data = await import(`../lib/content/posts/${post}.md`);

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
	export let content, title, date, category, image;
</script>

<h1>Post</h1>

<img src={image} alt="{title} | {category}" />
<h1>{title}</h1>
<a href="/{category}">
	<p>{category}</p>
</a>
<p>{date}</p>

<svelte:component this={content} />
