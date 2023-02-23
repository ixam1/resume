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
		<Section id={nav.Erfahrungen} className="bg-accent">
			<SectionTitle>
				<u>
					<Trans>Erfahrungen</Trans>
				</u>
			</SectionTitle>
			<Timeline
				timeline={[
					{
						title: "Senior Software Engineer - Front-End",
						subtitle: "eBay",
						time: t("Juni 2022 - aktuell"),
						list: [
							{
								description: t(
									"Verbesserung der Kundenerfahrung beim Kauf von sperrigen Artikeln, mit Arbeit an den wichtigsten Seiten auf eBay (Checkout und Artikelseite)"
								),
								technologies: ["Node.js", "React.js", "Marko.js"],
							},

							{
								description: t(
									"Implementierung eines neuen Kaufberaters, der den Kunden hilft passende Artikel zu finden, mit einer soliden Conversion Rate von 2-5%"
								),
								technologies: ["HTML", "CSS", "JS"],
								link: {
									href: "https://pages.ebay.de/smartphone-kaufberater/",
									text: t("Teste es aus"),
								},
							},

							{
								description: t(
									"Gewinn eines internen Wettbewerbs mit einem Prototyp für die Verbesserung der Karten-Sammel Funktion auf eBay. Ich hatte die Ehre unsere Idee der globalen Führung von eBay vorzustellen"
								),
								technologies: ["Node.js", "React.js"],
							},

							{
								description: t(
									"Realisierung von mehreren gesetzlich vorgeschriebenen Änderungen am Kündigungsprozess von eBay Plus, die u.a. verhinderten, dass die eBay App vom App Store fliegt"
								),
								technologies: ["Node.js", "React.js", "Scala", "Java"],
							},
						],
					},

					{
						title: t("Full-Stack Software Engineer | Geschäftsführer"),
						subtitle: "Webentwicklung 030 Berlin GmbH",
						time: t("März 2021 - aktuell"),
						info: t(
							"Gründung einer eigenen Webagentur mit ehemaligen Chef als Partner"
						),
						list: [
							{
								description: t("Automatisiertes Website-Testing-Tool"),
								technologies: [
									"Node.js",
									"React.js",
									"MongoDB",
									"Web-Scraping",
									"RestAPI",
									"Serverless",
								],
								link: {
									href: "https://karriere-website.kaufen/kostenlose-analyse",
									text: t("Teste es aus"),
								},
							},

							{
								description: t(
									"CRM Web-Applikation für die Personalvermittlung"
								),
								technologies: ["Blaze", "Meteor.js", "Node.js", "MongoDB"],
							},

							{
								description: t(
									"Implementieren von Schnittstellen zu externen Jobbörsen zur automatischen Übertragung von Jobs"
								),
								technologies: ["RestAPI"],
							},

							{
								description: t(
									"Chrome Extension zum automatischen Erfassen von Daten mit direkter Schnittstelle zur CRM Applikation"
								),
								technologies: ["RestAPI", "Web-Scraping"],
							},

							{
								description: t(
									"Auslesen von Stellenanzeigen Daten von verschiedenen Webseiten, mit verschiedenen Ausleseanforderungen für eine zentralisierte Stellen-Datenbank"
								),
								technologies: ["Web-Scraping", "Node.js", "MongoDB"],
							},

							{
								description: t(
									"Firmeneigenes Website-Verwaltungssystem für Kunden"
								),
								technologies: ["React.js", "Meteor.js", "Node.js", "MongoDB"],
							},

							{
								description: t(
									"8+ programmierte Webseiten, unter anderem Relaunch von WordPress Webseiten"
								),
								technologies: ["React.js", "Gatsby.js", "TailwindCSS"],
								link: {
									href: "https://karriere-website.kaufen/",
									text: t("Beispiel Firmen Website"),
								},
							},
						],
					},

					{
						title: t("Werkstudent Front-End Software Engineer"),
						subtitle: "VIPCRUITER GmbH",
						time: t("Juni 2020 - März 2021"),
						list: [
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
						list: [
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
						title: t("Werkstudent IT"),
						subtitle: "SCHAUM MASSIVHAUS",
						time: t("Mai 2017 - August 2019"),
						list: [
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
						list: [
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
			<WaveDivider2 toColor="text-accent-900" />
		</Section>
	)
}

export default Experience
