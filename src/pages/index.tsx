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

function Page() {
	return (
		<Layout>
			<Seo
				title="Maximilian Schaum - Full-Stack Webentwickler"
				description="Zuverlässiger und motivierter Full-Stack Webentwickler mit langer
				IT-Ausbildung. Spezialisiert auf Front-End Entwicklung, jedoch ohne
				Scheu zum Back-End."
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
