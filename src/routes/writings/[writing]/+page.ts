import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	try {
		const writing = await import(`../../../lib/writings/${params.writing}.svx`);
		return {
			WritingContent: writing.default,
			metadata: writing.metadata,
			slug: params.writing
		};
	} catch (err) {
		console.error('Error loading writing:', err);
		error(404, 'writing not found');
	}
}) satisfies PageLoad;
