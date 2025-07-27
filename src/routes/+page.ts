import type { PageLoad } from './$types';
import { getAllPostsMetadata } from '$lib/helpers';

export const load = (async () => {
	const posts = await getAllPostsMetadata();

	return {
		posts
	};
}) satisfies PageLoad;
