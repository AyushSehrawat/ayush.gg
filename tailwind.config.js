/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'saira-condensed': ['Saira Condensed', 'sans-serif'],
				'roboto-condensed': ['Roboto Condensed', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};
