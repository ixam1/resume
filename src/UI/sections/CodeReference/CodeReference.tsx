import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PrimaryButton from "../../components/PrimaryButton"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import Section from "../../components/Section"
import SectionTitle from "../../components/SectionTitle"
import { WaveDivider1 } from "../../components/Dividers"

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

function CodeReference() {
	return (
		<Section className="bg-accent">
			<SectionTitle>
				Diese Website ist <u>Open-Source</u>
			</SectionTitle>
			<div className="text-center">
				<h3 className="text-primary font-bold mb-4">Technologien</h3>
				<ul className="flex flex-wrap gap-4">
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
				Schau dir den Code an
			</PrimaryButton>
			<WaveDivider1 toColor="text-accent-900" />
		</Section>
	)
}

export default CodeReference
