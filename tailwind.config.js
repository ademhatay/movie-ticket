/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"barlow-normal": ["Barlow-Regular", "sans-serif"],
				"barlow-normal-italic": ["Barlow-Italic", "sans-serif"],
				"barlow-medium": ["Barlow-Medium", "sans-serif"],
				"barlow-medium-italic": ["Barlow-MediumItalic", "sans-serif"],
				"barlow-black": ["Barlow-Black", "sans-serif"],
				"barlow-black-italic": ["Barlow-BlackItalic", "sans-serif"],
			},
			colors: {
				"primary": "#D98639",
				"main": "#1E1F27",
				"tags": "#484747"
			},
		},
	},
	plugins: [],
}
