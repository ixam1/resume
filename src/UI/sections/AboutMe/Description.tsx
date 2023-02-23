import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

function Description() {
	const { t } = useTranslation()

	const titles = ["Software Engineer", "Front-End", "Back-End"]

	return (
		<div className="text-white text-center">
			<h3 className="text-2xl font-medium mb-6">
				<Trans>Hallo</Trans>!{" "}
				<span className="text-primary">
					<Trans>Ich heiße Maximilian Schaum.</Trans>
				</span>
			</h3>
			<p className="flex gap-4 mb-4 justify-center items-center flex-wrap">
				{titles.map((title, index) => (
					<React.Fragment key={index}>
						<span className="font-bold">{title}</span>
						{index !== titles.length - 1 && (
							<span className="text-xs">
								<FontAwesomeIcon icon={faCircle} size="sm" />
							</span>
						)}
					</React.Fragment>
				))}
			</p>
			<p>
				{t(
					"Erfahrender und zuverlässiger Software Engineer. Spezialisiert auf Front-End Entwicklung mit React.js und ein ausgeprägter Back-End Hintergrund. Leidenschaft zum kreativen Lösen von konkreten Problemen mit Hilfe von Web-Technologien."
				)}
			</p>
		</div>
	)
}

export default Description
