/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'gold-gradient-start': '#e1c16e',
        'gold-gradient-end': '#d4af37'
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #e1c16e, #d4af37)'
      }
		},
	},
	plugins: [],
}
