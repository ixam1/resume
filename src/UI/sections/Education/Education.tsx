import React from "react"
import nav from "../../../constants/nav"
import { WaveDivider2 } from "../../components/Dividers"
import Section from "../../components/Section"
import SectionTitle from "../../components/SectionTitle"
import Timeline from "../../components/Timeline"

function Education() {
	return (
		<Section id={nav.Bildung} className="bg-accent">
			<SectionTitle>
				<u>Bildung</u>
			</SectionTitle>
			<Timeline
				timeline={[
					{
						title: "Bachelor Mathematik / Informatik",
						subtitle: "Humboldt-Universität zu Berlin",
						info: "Wechsel des Zweitfaches von Physik zu Informatik in 2020",
						time: "2017 - 2021",
					},
					{
						title: "Ausbildung zum Fachinformatiker für Anwendungsentwicklung",
						subtitle: "IGEPA group GmbH & Co. KG",
						time: "2014 - 2017",
					},
				]}
			/>
			<WaveDivider2 toColor="text-accent-900" />
		</Section>
	)
}

export default Education
