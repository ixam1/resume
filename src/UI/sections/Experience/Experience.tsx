import React from "react"
import nav from "../../../constants/nav"
import { WaveDivider2 } from "../../components/Dividers"
import Section from "../../components/Section"
import SectionTitle from "../../components/SectionTitle"
import Timeline from "../../components/Timeline"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

function Experience() {
	const { t } = useTranslation()

	return (
		<Section id={nav.Erfahrungen} className="bg-accent-900">
			<SectionTitle>
				<u>
					<Trans>Erfahrungen</Trans>
				</u>
			</SectionTitle>
			<Timeline
				timeline={[
					{
						title: t("Full-Stack Webentwickler | Geschäftsführer"),
						subtitle: "Webentwicklung 030 Berlin GmbH",
						time: t("März 2021 - aktuell"),
						info: t(
							"Gründung einer eigenen Webagentur mit ehemaligen Chef als Partner"
						),
						items: [
							{
								description: t(
									"Optimierung von Kunden Webseiten in Bezug auf organische Bewerbergewinnung - Steigerung von 0 - 1 Bewerbern zu 10 - 20 Bewerbern im Monat"
								),
							},

							{
								description: t(
									"Webseiten Design, Erstellung und SEO-Optimierung"
								),
								technologies: ["React.js", "Gatsby.js"],
							},

							{
								description: t(
									"Implementieren von Schnittstellen zu externen Jobbörsen zur automatischen Übertragung von Jobs"
								),
								technologies: ["RestAPI"],
							},

							{
								description: t(
									"Firmeneigenes Website-Verwaltungssystem für Kunden"
								),
								technologies: ["React.js", "Meteor.js", "Node.js", "MongoDB"],
							},
							{
								description: t(
									"Online-Analyse zum automatisierten Testen von Webseiten auf verschiedene Qualitätskriterien"
								),
								technologies: [
									"React.js",
									"RestAPI",
									"Node.js",
									"MongoDB",
									"Netlify Background Functions",
								],
							},
							{
								description: t(
									"CRM Web-Applikation für die Personalvermittlung"
								),
								technologies: ["Blaze", "Meteor.js", "Node.js", "MongoDB"],
							},
							{
								description: t(
									"Chrome Extension zum automatischen Erfassen von Daten mit direkter Schnittstelle zur CRM Applikation"
								),
								technologies: ["RestAPI"],
							},
						],
					},

					{
						title: t("Werkstudent Webentwicklung"),
						subtitle: "VIPCRUITER GmbH",
						time: t("Juni 2020 - März 2021"),
						items: [
							{
								description: t("Webseiten Instandhaltung und Optimierung"),
								technologies: ["WordPress", "PHP"],
							},
							{
								description: t("Webseiten Relaunch von WordPress zu Gatsby.js"),
								technologies: ["React.js", "Gatsby.js"],
							},
						],
					},

					{
						title: t("Werkstudent IT / Controlling"),
						subtitle: "Mercedes-Benz AG",
						time: t("September 2019 - Juni 2020"),
						items: [
							{
								description: t("Reporting Dashboard Entwicklung"),
								technologies: ["Longview", "Microsoft Power BI"],
							},
							{
								description: t("Excel VBA Programmierung"),
							},
							{ description: t("Prozessmodellierung und -automatisierung") },
						],
						buttons: [
							{
								text: t("Arbeitszeugnis"),
								href: "/Arbeitszeugnis Mercedes Benz.pdf",
							},
						],
					},

					{
						title: t("Werkstudent Webentwicklung"),
						subtitle: "SCHAUM MASSIVHAUS",
						time: t("Mai 2017 - August 2019"),
						items: [
							{
								description: t(
									"Webseiten Erstellung, Instandhaltung und Optimierung"
								),
								technologies: ["HTML", "CSS", "JS", "PHP"],
							},
							{
								description: t("IT-Administration und Buchhaltung"),
							},
						],
						buttons: [
							{
								text: t("Arbeitszeugnis"),
								href: "/Arbeitszeugnis Schaum Massivhaus.pdf",
							},
						],
					},

					{
						title: t("Fachinformatiker für Anwendungsentwicklung"),
						subtitle: "IGEPA group GmbH & Co. KG",
						time: t("September 2014 - April 2017"),
						items: [
							{
								description: t("JD Edwards E1 - Datenbankprogrammierung"),
							},
							{
								description: t("Java Webapplikation und Schnittstellen"),
							},
						],
						buttons: [
							{
								text: t("Arbeitszeugnis"),
								href: "/Arbeitszeugnis Igepa.pdf",
							},
						],
					},
				]}
			/>
			<WaveDivider2 toColor="text-accent" />
		</Section>
	)
}

export default Experience
