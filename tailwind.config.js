const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					DEFAULT: colors.sky[500],
					...colors.sky,
				},
				accent: {
					DEFAULT: colors.slate[800],
					...colors.slate,
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
