export interface PostMetadata {
	title: string;
	date: string;
}

export interface Post {
	slug: string;
	metadata: PostMetadata;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content?: any;
}

export async function getAllPostsMetadata(): Promise<Post[]> {
	const postModules = import.meta.glob('/src/lib/posts/*.svx', {
		eager: true,
		import: 'metadata'
	});

	const posts: Post[] = [];

	for (const path in postModules) {
		const slug = path.split('/').pop()?.replace('.svx', '') || '';
		const metadata = postModules[path] as PostMetadata;

		posts.push({
			slug,
			metadata
		});
	}

	return posts.sort(
		(a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
	);
}
