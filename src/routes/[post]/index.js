export async function get({ params }) {
	const { post } = params;

	const data = await import(`../../lib/content/posts/${post}.md`);

	return {
		body: {
			content: data.default,
			title: data.metadata.title,
			date: data.metadata.date,
			category: data.metadata.categories[0],
			image: data.metadata.coverImage,
			slug: post
		}
	};
}
