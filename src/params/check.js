const posts = import.meta.globEager('../lib/content/posts/*.md');
let list = [];

for (const post in posts) {
	const category = posts[post].metadata.categories[0];
	list.push(category);
}

const categories = Array.from(new Set(list));

export function match(param) {
	return categories.includes(param);
}
