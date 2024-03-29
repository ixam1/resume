import React from "react"
import nav from "../../../constants/nav"
import { WaveDividerMultiple } from "../../components/Dividers"
import Section from "../../components/Section"
import SectionTitle from "../../components/SectionTitle"
import ContactForm from "./ContactForm"
import ContactIcons from "./ContactIcons"
import { Trans } from "gatsby-plugin-react-i18next"

function Contact() {
	return (
		<Section id={nav.Kontakt} className="bg-accent-900">
			<SectionTitle>
				<u>
					<Trans>Kontaktiere mich</Trans>
				</u>
			</SectionTitle>
			<div className="flex gap-16 w-full justify-center flex-wrap lg:flex-nowrap">
				<ContactIcons />
				<div className="flex-grow">
					<ContactForm />
				</div>
			</div>
			<WaveDividerMultiple toColor="text-accent" />
		</Section>
	)
}

export default Contact
