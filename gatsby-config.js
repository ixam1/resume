const siteMetadata = {
	title: "Maximilian Schaum - Full-Stack Webentwickler",
	description: "Resume von Maximilian Schaum",
	image: "/logo_social.png",
	siteUrl: `https://max-s-resume.netlify.app/`,
}

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
	siteMetadata,

	plugins: [
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: `Resume Maximilian Schaum`,
				lang: `de`,
				start_url: `/`,
				background_color: `#1E293B`,
				theme_color: `#0ea5e9`,
				display: `standalone`,
				icon: "static/favicon.png",
			},
		},

		{
			resolve: "gatsby-plugin-anchor-links",
			options: {
				offset: 0,
			},
		},

		"gatsby-plugin-postcss",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,

		{
			resolve: "gatsby-omni-font-loader",

			options: {
				mode: "async",

				enableListener: true,

				custom: [
					{
						name: ["Montserrat"],
						file: "/fonts/Montserrat/css/all.css",
					},
				],
			},
		},

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/locales`,
				name: `locale`,
			},
		},
		{
			resolve: `gatsby-plugin-react-i18next`,
			options: {
				localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
				languages: [`en`, `de`],
				defaultLanguage: `de`,
				// if you are using Helmet, you must include siteUrl, and make sure you add http:https
				siteUrl: siteMetadata.siteUrl,
				// you can pass any i18next options
				i18nextOptions: {
					interpolation: {
						escapeValue: false, // not needed for react as it escapes by default
					},
					keySeparator: false,
					nsSeparator: false,
				},
				pages: [
					{
						matchPath: "/impressum",
						excludeLanguages: ["en"],
					},
					{
						matchPath: "/datenschutz",
						excludeLanguages: ["en"],
					},
				],
			},
		},
	],
}
