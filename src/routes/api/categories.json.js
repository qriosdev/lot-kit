export const get = async () => {
	const posts = import.meta.globEager('../../lib/content/posts/*.md');
	let list = [];

	for (const post in posts) {
		const category = posts[post].metadata.categories[0];
		list.push(category);
	}

	let categories = Array.from(new Set(list));

	return {
		body: categories
	};
};
