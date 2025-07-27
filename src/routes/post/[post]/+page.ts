import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	try {
		const post = await import(`../../../lib/posts/${params.post}.svx`);
		return {
			PostContent: post.default,
			metadata: post.metadata,
			slug: params.post
		};
	} catch (err) {
		console.error('Error loading post:', err);
		error(404, 'Post not found');
	}
}) satisfies PageLoad;
