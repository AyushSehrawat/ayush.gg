import type { PageLoad } from './$types';
import { getAllWritingsMetadata } from '$lib/helpers';

export const load = (async () => {
	const writings = await getAllWritingsMetadata();

	return {
		writings
	};
}) satisfies PageLoad;
