import React from "react"
import nav from "../../../constants/nav"
import { WaveDivider2 } from "../../components/Dividers"
import Section from "../../components/Section"
import SectionTitle from "../../components/SectionTitle"
import Timeline from "../../components/Timeline"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

function Education() {
	const { t } = useTranslation()

	return (
		<Section id={nav.Bildung} className="bg-accent-900">
			<SectionTitle>
				<u>
					<Trans>Bildung</Trans>
				</u>
			</SectionTitle>
			<Timeline
				timeline={[
					{
						title: t("Bachelor Mathematik / Informatik"),
						subtitle: "Humboldt-Universität zu Berlin",
						info: t("Gründung der eigenen Firma während des Studiums"),
						time: "2017 - 2021",
						buttons: [
							{
								text: t("Abschlusszeugnis"),
								href: t("/Bachelor Abschlusszeugnis.pdf"),
							},
						],
					},
					{
						title: t(
							"Ausbildung zum Fachinformatiker für Anwendungsentwicklung"
						),
						subtitle: "Oberstufenzentrum Informations- und Medizintechnik",
						time: "2014 - 2017",
						buttons: [
							{
								text: t("Abschlusszeugnis"),
								href: "/IHK Abschlusszeugnis.pdf",
							},
						],
					},
				]}
			/>
			<WaveDivider2 toColor="text-accent" />
		</Section>
	)
}

export default Education
