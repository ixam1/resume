import React from "react"
import nav from "../../../constants/nav"
import { WaveDivider1 } from "../../components/Dividers"
import Section from "../../components/Section"
import SectionTitle from "../../components/SectionTitle"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

function Numbers() {
	const { t } = useTranslation()

	const stats = [
		{
			name: t("Webseiten erstellt"),
			value: 16,
		},
		{
			name: t("Web-Applikationen entwickelt"),
			value: 3,
		},
		{
			name: t("professionelle Erfahrung als Webentwickler"),
			value: 4,
			subtitle: t("Jahre"),
		},
	]

	return (
		<Section id={nav.Zahlen} className="bg-accent text-white">
			<SectionTitle>
				<Trans>Ein paar</Trans>{" "}
				<u>
					<Trans>Zahlen</Trans>
				</u>
			</SectionTitle>
			<ul className="flex justify-center flex-wrap gap-8">
				{stats.map((stat, index) => (
					<li
						key={index}
						className="flex flex-col items-center mx-4 sm:w-64 text-center"
					>
						<span className="text-6xl font-bold text-primary mb-3 relative">
							{stat.value}
							<span className="text-xs text-primary absolute top-[calc(100%-7px)] left-0">
								{stat.subtitle}
							</span>
						</span>
						<span className="text-lg font-medium text-accent-200">
							{stat.name}
						</span>
					</li>
				))}
			</ul>
			<WaveDivider1 toColor="text-accent-900" />
		</Section>
	)
}

export default Numbers
