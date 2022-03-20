import React from "react"
import nav from "../../../constants/nav"
import AllSocialButtons from "../../components/AllSocialButtons"
import { WaveDivider1 } from "../../components/Dividers"
import Section from "../../components/Section"
import PageTitle from "./PageTitle"
import ResumeButton from "./ResumeButton"

function Home() {
	return (
		<Section id={nav.Home} className="bg-accent" fullscreen>
			<PageTitle />
			<AllSocialButtons />
			<ResumeButton />
			<WaveDivider1 toColor="text-accent-900" />
		</Section>
	)
}

export default Home
