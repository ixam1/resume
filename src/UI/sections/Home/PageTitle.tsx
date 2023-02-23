import React from "react"
import RotatingText from "./RotatingText"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

function PageTitle() {
	const { t } = useTranslation()
	const strings = [
		t("heiße Maximilian Schaum."),
		t("bin erfahrener Software Engineer."),
		t("habe eine Leidenschaft für Front-End."),
		t("habe einen starken Hintergrund im Back-End."),
	]

	return (
		<h1 className="text-center w-full text-white">
			<span className="block text-3xl font-bold mb-4">
				<Trans>Hallo</Trans> 👋
			</span>
			<span className="block font-extrabold text-xl sm:text-4xl lg:text-6xl">
				<Trans>Ich</Trans>{" "}
				<RotatingText strings={strings} className="text-primary" />
			</span>
		</h1>
	)
}

export default PageTitle
