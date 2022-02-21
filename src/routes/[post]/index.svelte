<script context="module">
	export async function load({ fetch, params }) {
		const { post } = params;

		const request = await fetch(`/api/data.json?article=${post}`);
		const response = await request.json();

		const content = await import(`../../lib/content/posts/${post}.md`);

		return {
			props: {
				article: response,
				content
			}
		};
	}
</script>

<script>
	export let article, content;
	const { title, date, categories, coverImage, slug } = article;
</script>

<img src={coverImage} alt="{title} | {categories[0]}" />
<h1>{title}</h1>
<p>{categories[0]}</p>
<p>{date}</p>

<svelte:component this={content.default} />
