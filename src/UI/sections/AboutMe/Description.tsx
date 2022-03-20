import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

function Description() {
	const titles = ["Webentwickler", "Front-End", "Back-End"]

	return (
		<div className="text-white text-center">
			<h3 className="text-2xl font-medium mb-6">
				Hallo!{" "}
				<span className="text-primary">Ich heiße Maximilian Schaum.</span>
			</h3>
			<p className="flex gap-4 mb-4 justify-center items-center">
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
				Dynamischer und motivierter Full-Stack Webentwickler mit langer
				IT-Ausbildung. Spezialisiert auf Front-End Entwicklung, jedoch ohne
				Scheu zum Back-End. Leidenschaft zum kreativen Lösen von konkreten
				Problemen mit Hilfe des Webs. Anpassungsfähiger und lernbereiter
				Team-Player, mit der Fähigkeit eigenständig und zielgerichtet zu
				arbeiten und dem Willen die Extra-Meile zu gehen.
			</p>
		</div>
	)
}

export default Description
