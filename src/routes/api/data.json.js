export const get = async ({ url }) => {
	const posts = import.meta.globEager('../../lib/content/posts/*.md');
	let data = [];

	for (const post in posts) {
		const slug = post.substring(post.lastIndexOf('/') + 1, post.indexOf('.md'));
		const { metadata, default: content } = posts[post];
		metadata.slug = slug;
		data.push(metadata);
	}

	data.sort((a, b) => new Date(b.date) - new Date(a.date));

	const { searchParams } = url;
	const article = searchParams.get('article');
	const category = searchParams.get('category');
	const limit = searchParams.get('limit');
	const page = searchParams.get('page');
	const exclude = searchParams.get('exclude');

	// Pagination function
	const paginate = (items, page = 1, perPage = 5) =>
		items.slice(perPage * (page - 1), perPage * page);

	// Get a specific article
	if (article) {
		return {
			body: data.find((item) => item.slug === article)
		};
	}

	// Exclude a specific article
	if (exclude) data = data.filter((item) => item.slug !== exclude);

	// Get posts from a category
	if (category) data = data.filter((item) => item.categories.includes(category));

	// Limit & pagination
	if (limit) {
		if (page) {
			data = paginate(data, page, limit);
		} else {
			data = data.slice(0, limit);
		}
	}

	return {
		body: data
	};
};
