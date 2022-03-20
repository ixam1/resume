import React from "react"
import Layout from "../UI/layout/Layout"
import AboutMe from "../UI/sections/AboutMe"
import Contact from "../UI/sections/Contact"
import Education from "../UI/sections/Education"
import Experience from "../UI/sections/Experience"
import Hero from "../UI/sections/Home"
import Stats from "../UI/sections/Numbers"

function Page() {
	return (
		<Layout>
			<Hero />
			<AboutMe />
			<Stats />
			<Experience />
			<Education />
			<Contact />
		</Layout>
	)
}

export default Page
