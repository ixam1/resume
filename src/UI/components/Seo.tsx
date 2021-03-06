import React from "react"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next, Helmet } from "gatsby-plugin-react-i18next"

type Props = {
	title?: string
	description?: string
	noIndex?: boolean
}

const Seo = ({ title, description, noIndex }: Props) => {
	const { language } = useI18next()

	const { pathname } = useLocation()
	const { site } = useStaticQuery(query)

	const { defaultTitle, defaultDescription, siteUrl, defaultImage } =
		site.siteMetadata

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${defaultImage}`,
		url: `${siteUrl}${pathname}`,
	}

	return (
		<Helmet title={seo.title}>
			{noIndex && <meta name="robots" content="noindex" />}

			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />

			{seo.url && <meta property="og:url" content={seo.url} />}

			<meta property="og:type" content="website" />

			{seo.title && <meta property="og:title" content={seo.title} />}

			{seo.description && (
				<meta property="og:description" content={seo.description} />
			)}

			{seo.image && <meta property="og:image" content={seo.image} />}

			<meta name="twitter:card" content="summary_large_image" />

			{seo.title && <meta name="twitter:title" content={seo.title} />}

			{seo.description && (
				<meta name="twitter:description" content={seo.description} />
			)}

			{seo.image && <meta name="twitter:image" content={seo.image} />}
		</Helmet>
	)
}

export default Seo

const query = graphql`
	query SEO {
		site {
			siteMetadata {
				defaultTitle: title
				defaultDescription: description
				siteUrl: siteUrl
				defaultImage: image
			}
		}
	}
`
