export interface WritingMetadata {
	title: string;
	date: string;
}

export interface Writing {
	slug: string;
	metadata: WritingMetadata;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content?: any;
}

export async function getAllWritingsMetadata(): Promise<Writing[]> {
	const writingModules = import.meta.glob('/src/lib/writings/*.svx', {
		eager: true,
		import: 'metadata'
	});

	const writings: Writing[] = [];

	for (const path in writingModules) {
		const slug = path.split('/').pop()?.replace('.svx', '') || '';
		const metadata = writingModules[path] as WritingMetadata;

		writings.push({
			slug,
			metadata
		});
	}

	return writings.sort(
		(a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
	);
}
