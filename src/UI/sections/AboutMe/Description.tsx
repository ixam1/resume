import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

function Description() {
	const { t } = useTranslation()

	const titles = [t("Webentwickler"), "Front-End", "Back-End"]

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
					"Zuverlässiger und motivierter Full-Stack Webentwickler mit langer IT-Erfahrung. Spezialisiert auf Front-End Entwicklung mit React.js, mit viel Erfahrung im Back-End. Leidenschaft zum kreativen Lösen von konkreten Problemen mit Hilfe des Webs. Anpassungsfähiger und lernbereiter Team-Player, mit der Fähigkeit eigenständig und zielgerichtet zu arbeiten und der Bereitschaft die Extra-Meile zu gehen."
				)}
			</p>
		</div>
	)
}

export default Description
