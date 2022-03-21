import React from "react"
import nav from "../../../constants/nav"
import { WaveDivider2 } from "../../components/Dividers"
import Section from "../../components/Section"
import SectionTitle from "../../components/SectionTitle"
import Timeline from "../../components/Timeline"

function Experience() {
	return (
		<Section id={nav.Erfahrungen} className="bg-accent-900">
			<SectionTitle>
				<u>Erfahrungen</u>
			</SectionTitle>
			<Timeline
				timeline={[
					{
						title: "Selbstständiger Webentwickler",
						subtitle: "Webentwicklung 030 Berlin GmbH",
						time: "März 2021 - aktuell",
						info: "Gründung einer eigenen Webagentur mit ehemaligen Chef als Partner",
						items: [
							{
								description: "Webseiten Design, Erstellung und SEO-Optimierung",
								technologies: ["React", "Gatsby.js"],
							},
							{
								description:
									"Firmeneigenes Website-Verwaltungssystem für Kunden",
								technologies: ["React", "Meteor.js", "Node.js", "MongoDB"],
							},
							{
								description:
									"Online-Analyse zum automatisierten Testen von Webseiten auf verschiedene Qualitätskriterien",
								technologies: [
									"React",
									"RestAPI",
									"Node.js",
									"MongoDB",
									"Netlify Background Functions",
								],
							},
							{
								description: "CRM Web-Applikation für die Personalvermittlung",
								technologies: ["Blaze", "Meteor.js", "Node.js", "MongoDB"],
							},
							{
								description:
									"Chrome Extension zum erfassen von Daten mit direkter Schnittstelle zum CRM-System",
								technologies: ["RestAPI"],
							},
						],
					},

					{
						title: "Werkstudent Webentwicklung",
						subtitle: "VIPCRUITER GmbH",
						time: "Juni 2020 - März 2021",
						items: [
							{
								description: "Webseiten Instandhaltung und Optimierung",
								technologies: ["WordPress", "PHP"],
							},
							{
								description: "Webseiten Relaunch von WordPress zu Gatsby.js",
								technologies: ["React", "Gatsby.js"],
							},
						],
					},

					{
						title: "Werkstudent IT / Controlling",
						subtitle: "VIPCRUITER GmbH",
						time: "Septermber 2019 - Juni 2020",
						items: [
							{
								description: "Reporting Dashboard Entwicklung",
								technologies: ["Longview", "Microsoft Power BI"],
							},
							{
								description: "Excel VBA Programmierung",
							},
							{ description: "Prozessmodellierung und -automatisierung" },
						],
					},

					{
						title: "Werkstudent Webentwicklung",
						subtitle: "SCHAUM MASSIVHAUS",
						time: "Mai 2017 - August 2019",
						items: [
							{
								description:
									"Webseiten Erstellung, Instandhaltung und Optimierung",
								technologies: ["HTML", "CSS", "JS", "PHP"],
							},
							{
								description: "IT-Administration und Buchhaltung",
							},
						],
					},

					{
						title: "Fachinformatiker für Anwendungsentwicklung",
						subtitle: "IGEPA group GmbH & Co. KG",
						time: "September 2014 - April 2017",
						items: [
							{
								description: "JD Edwards E1 - Datenbankprogrammierung",
							},
							{
								description: "Java Webapplikation und Schnittstellen",
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
