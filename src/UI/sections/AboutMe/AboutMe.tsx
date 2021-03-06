import React from "react"
import nav from "../../../constants/nav"
import { WaveDivider2 } from "../../components/Dividers"
import Section from "../../components/Section"
import SectionTitle from "../../components/SectionTitle"
import Avatar from "./Avatar"
import Description from "./Description"
import Skills from "./Skills"
import { Trans } from "gatsby-plugin-react-i18next"

function AboutMe() {
	return (
		<Section id={nav["Über mich"]} className="bg-accent-900">
			<SectionTitle>
				<u>
					<Trans>Über mich</Trans>
				</u>
			</SectionTitle>
			<Avatar />
			<Description />
			<Skills />
			<WaveDivider2 toColor="text-accent-800" />
		</Section>
	)
}

export default AboutMe
