// module.exports = {
// 	// @see https://tailwindcss.com/docs/upcoming-changes
// 	future: {
// 		removeDeprecatedGapUtilities: true,
// 		purgeLayersByDefault: true,
// 	},
// 	purge: [
// 		'./components/**/**/*.{js,ts,jsx,tsx}',
// 		'./pages/**/*.{js,ts,jsx,tsx}'],
// 	theme: {
// 		extend: {},
// 		container: {
// 			center: true,
// 			padding: '1rem',
// 		},
// 	},
// 	variants: {},
// 	darkMode: 'class',
// 	plugins: [
// 		require( 'tailwindcss' ),
// 		require( 'precss' ),
// 		require( 'autoprefixer' )
// 	]
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [],
}