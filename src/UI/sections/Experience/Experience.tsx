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
						title: t("Selbstständiger Webentwickler"),
						subtitle: "Webentwicklung 030 Berlin GmbH",
						time: t("März 2021 - aktuell"),
						info: t(
							"Gründung einer eigenen Webagentur mit ehemaligen Chef als Partner"
						),
						items: [
							{
								description: t(
									"Webseiten Design, Erstellung und SEO-Optimierung"
								),
								technologies: ["React", "Gatsby.js"],
							},
							{
								description: t(
									"Firmeneigenes Website-Verwaltungssystem für Kunden"
								),
								technologies: ["React", "Meteor.js", "Node.js", "MongoDB"],
							},
							{
								description: t(
									"Online-Analyse zum automatisierten Testen von Webseiten auf verschiedene Qualitätskriterien"
								),
								technologies: [
									"React",
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
								technologies: ["React", "Gatsby.js"],
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
					},
				]}
			/>
			<WaveDivider2 toColor="text-accent" />
		</Section>
	)
}

export default Experience
