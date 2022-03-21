import {
	faCode,
	faCodeMerge,
	faDatabase,
	faObjectsColumn,
	faRectangleTerminal,
} from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

function Skills() {
	const { t } = useTranslation()

	const skillCategories = [
		{
			name: "Front-End",
			icon: faObjectsColumn,
			skills: [
				{
					name: "React.js",
					level: 3,
				},
				{
					name: "Gatsby.js",
					level: 3,
				},
				{
					name: "TailwindCSS",
					level: 3,
				},
				{
					name: "Bootstrap",
					level: 2,
				},
				{
					name: "WordPress",
					level: 2,
				},
				{
					name: "Next.js",
					level: 2,
				},
				{
					name: "GSAP",
					level: 2,
				},
				{
					name: "Vue.js",
					level: 1,
				},
				{
					name: "Svelte",
					level: 1,
				},
			],
		},
		{
			name: "Back-End",
			icon: faRectangleTerminal,
			skills: [
				{
					name: "Meteor.js",
					level: 3,
				},
				{
					name: "Node.js",
					level: 2,
				},
				{
					name: "Rest API",
					level: 2,
				},
				{
					name: "Serverless",
					level: 2,
				},
				{
					name: "GraphQL",
					level: 1,
				},
				{
					name: "Express.js",
					level: 1,
				},
			],
		},
		{
			name: "Basics",
			icon: faCode,
			skills: [
				{
					name: "HTML",
					level: 3,
				},
				{
					name: "Javascript",
					level: 3,
				},
				{
					name: "CSS",
					level: 3,
				},
				{
					name: "PHP",
					level: 2,
				},
				{
					name: "Typescript",
					level: 2,
				},
			],
		},
		{
			name: t("Datenbank"),
			icon: faDatabase,
			skills: [
				{
					name: "MongoDB",
					level: 3,
				},
				{
					name: "MySql",
					level: 1,
				},
			],
		},
		{
			name: t("Sonstiges"),
			icon: faCodeMerge,
			skills: [
				{
					name: "VSCode",
					level: 3,
				},

				{
					name: "Netlify",
					level: 3,
				},

				{
					name: "SEO",
					level: 2,
				},

				{
					name: "Chrome Extensions",
					level: 2,
				},

				{
					name: "Git",
					level: 2,
				},

				{
					name: "Github Actions",
					level: 2,
				},

				{
					name: "AWS",
					level: 1,
				},

				{
					name: "Linux",
					level: 1,
				},
			],
		},
	]
	return (
		<div className="text-center text-white">
			<h3 className="text-primary font-bold mb-4">
				<Trans>Fähigkeiten</Trans>
			</h3>
			<ul className="flex justify-center flex-wrap">
				{skillCategories.map((skillCategory, index) => (
					<li key={index} className="w-full md:w-1/2 lg:w-1/3 p-6 space-y-4">
						<FontAwesomeIcon icon={skillCategory.icon} size="4x" />
						<div className="text-xl font-bold text-primary">
							{skillCategory.name}
						</div>
						<ul className="flex justify-center gap-2 flex-wrap">
							{skillCategory.skills.map((skill, index) => (
								<li
									key={index}
									className={clsx(
										"rounded border px-2 py-1 text-sm",
										skill.level === 1 && "border-white",
										skill.level === 2 && "border-primary",
										skill.level === 3 &&
											"bg-primary text-accent font-bold border-transparent"
									)}
								>
									{skill.name}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Skills
