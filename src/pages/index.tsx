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
import { useTranslation } from "gatsby-plugin-react-i18next"
import Analytics from "../UI/components/Analytics"

function Page() {
	const { t } = useTranslation()
	return (
		<Layout>
			<Analytics />
			<Seo
				noIndex
				title={"Maximilian Schaum - Software Engineer"}
				description={t(
					"Erfahrender und zuverlässiger Software Engineer. Spezialisiert auf Front-End Entwicklung mit React.js und ein ausgeprägter Back-End Hintergrund. Leidenschaft zum kreativen Lösen von konkreten Problemen mit Hilfe von Web-Technologien."
				)}
			/>
			<Hero />
			<AboutMe />
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
