import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
import { getAllWritingsMetadata } from '$lib/helpers';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const writings = await getAllWritingsMetadata();
	const writingSlugs = writings.map((writing) => writing.slug);

	return await sitemap.response({
		origin: 'https://ayush.gg',
		paramValues: {
			'/writings/[writing]': writingSlugs
		},
		defaultChangefreq: 'daily'
	});
};
