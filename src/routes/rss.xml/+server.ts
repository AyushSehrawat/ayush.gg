import type { RequestHandler } from '@sveltejs/kit';
import { getAllWritingsMetadata } from '$lib/helpers';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const writings = await getAllWritingsMetadata();
	const rssFeed = render(writings);

	return new Response(rssFeed, {
		headers: {
			'Content-Type': 'application/rss+xml',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};

const render = (writings: { slug: string; metadata: { title: string; date: string } }[]) => {
	const items = writings
		.map(
			(writing) => `
        <item>
            <title>${writing.metadata.title}</title>
            <guid>https://ayush.gg/writings/${writing.slug}</guid>
            <link>https://ayush.gg/writings/${writing.slug}</link>
            <pubDate>${new Date(writing.metadata.date).toUTCString()}</pubDate>
            <description>${writing.metadata.title}</description>
        </item>
    `
		)
		.join('');

	return `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
            <title>mini space rss feed</title>
            <link>https://ayush.gg</link>
            <description>Your website RSS feed</description>
            <atom:link href="http://ayush.gg/rss.xml" rel="self" type="application/rss+xml" />
            ${items}
        </channel>
    </rss>`;
};
