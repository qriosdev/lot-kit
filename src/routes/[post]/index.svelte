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
