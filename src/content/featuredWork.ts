// Update this data to control which projects appear in the Featured Work section.
// Replace placeholder titles, descriptions, tags, media paths, and links with your real project info.
export interface FeaturedProject {
	id: string;
	title: string;
	description: string;
	tags: string[];
	image?: string;
	video?: string;
	link?: string;
}

export const featuredProjects: FeaturedProject[] = [
	{
		id: 'placeholder1',
		title: 'Placeholder Project 1',
		description: 'This is a placeholder description for the first featured project.',
		tags: ['Design', 'Frontend'],
		image: '/assets/blog-placeholder-1.jpg',
		video: '',
		link: '#',
	},
	{
		id: 'placeholder2',
		title: 'Placeholder Project 2',
		description: 'Swap this copy with details about your second standout project.',
		tags: ['Product', 'UI'],
		image: '/assets/blog-placeholder-2.jpg',
		video: '',
		link: '#',
	},
	{
		id: 'placeholder3',
		title: 'Placeholder Project 3',
		description: 'Describe what makes this project unique or impactful.',
		tags: ['Tooling', 'Automation'],
		image: '/assets/blog-placeholder-3.jpg',
		video: '',
		link: '#',
	},
	{
		id: 'placeholder4',
		title: 'Placeholder Project 4',
		description: 'Give a short overview of the problem you solved here.',
		tags: ['Data', 'Visualization'],
		image: '/assets/blog-placeholder-4.jpg',
		video: '',
		link: '#',
	},
	{
		id: 'placeholder5',
		title: 'Placeholder Project 5',
		description: 'Share the results or metrics that highlight this project’s success.',
		tags: ['Research', 'Case Study'],
		image: '/assets/blog-placeholder-5.jpg',
		video: '',
		link: '#',
	},
];


