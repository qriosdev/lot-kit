export function get({ params }) {
	const posts = import.meta.globEager('../../lib/content/posts/*.md');
	const { category } = params;
	const data = [];

	for (const post in posts) {
		const slug = post.substring(post.lastIndexOf('/') + 1, post.indexOf('.md'));
		const { metadata } = posts[post];
		metadata.slug = slug;
		if (metadata.categories.includes(category)) data.push(metadata);
	}

	if (data.length > 0) {
		return {
			body: { posts: data }
		};
	}

	return { fallthrough: true };
}
