const siteMetadata = {
	siteUrl: `https://www.yourdomain.tld`,
}

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
	siteMetadata,

	plugins: [
		/* {
			resolve: "gatsby-plugin-manifest",
			options: {
				name: `Resume Maximilian Schaum`,
				lang: `de`,
				start_url: `/`,
				background_color: `#FBF8F8`,
				theme_color: `#fa5724`,
				display: `standalone`,
				icon: "static/Favicon.png",
			},
		}, */

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

		/* 		{
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
			},
		}, */
	],
}