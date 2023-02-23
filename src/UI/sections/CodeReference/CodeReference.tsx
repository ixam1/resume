import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PrimaryButton from "../../components/PrimaryButton"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import Section from "../../components/Section"
import SectionTitle from "../../components/SectionTitle"
import { WaveDivider1 } from "../../components/Dividers"
import nav from "../../../constants/nav"
import { Trans } from "gatsby-plugin-react-i18next"

function CodeReference() {
	const technologies = [
		{
			name: "React",
			icon: faReact,
		},
		{
			name: "Typescript",
		},
		{
			name: "Gatsby.js",
		},
		{
			name: "TailwindCSS",
		},
	]
	return (
		<Section id={nav.Code} className="bg-accent-900">
			<SectionTitle>
				<Trans>Diese Website ist</Trans> <u>Open-Source</u>
			</SectionTitle>
			<div className="text-center">
				<h3 className="text-primary font-bold mb-4">
					<Trans>Gemacht mit</Trans>
				</h3>
				<ul className="flex flex-wrap justify-center gap-4">
					{technologies.map(({ name, icon }) => (
						<li
							key={name}
							className="rounded-xl border-primary hover:bg-primary transition-colors font-medium border px-4 py-2"
						>
							{icon && (
								<span className="inline-block mr-2">
									<FontAwesomeIcon icon={icon} />
								</span>
							)}
							{name}
						</li>
					))}
				</ul>
			</div>
			<PrimaryButton
				As="a"
				target="_blank"
				rel="noopener noreferer"
				href="https://github.com/ixam1/resume"
			>
				<Trans>Schau dir den Code an</Trans>
			</PrimaryButton>
			<WaveDivider1 toColor="text-accent" />
		</Section>
	)
}

export default CodeReference
