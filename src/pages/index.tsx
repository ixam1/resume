import { graphql } from "gatsby"
import React from "react"
import Seo from "../UI/components/Seo"
import Layout from "../UI/layout/Layout"
import AboutMe from "../UI/sections/AboutMe"
import CodeReference from "../UI/sections/CodeReference/CodeReference"
import Contact from "../UI/sections/Contact"
import Education from "../UI/sections/Education"
import Experience from "../UI/sections/Experience"
import Hero from "../UI/sections/Home"
import Stats from "../UI/sections/Numbers"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Analytics from "../UI/components/Analytics"

function Page() {
	const { t } = useTranslation()
	return (
		<Layout>
			<Analytics />
			<Seo
				noIndex
				title={t("Maximilian Schaum - Full-Stack Webentwickler")}
				description={t(
					"Zuverlässiger und motivierter Full-Stack Webentwickler mit langer IT-Erfahrung. Spezialisiert auf Front-End Entwicklung, jedoch ohne Scheu zum Back-End."
				)}
			/>
			<Hero />
			<AboutMe />
			<Stats />
			<Experience />
			<CodeReference />
			<Education />
			<Contact />
		</Layout>
	)
}

export default Page

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`
