import React from "react"
import PrimaryButton from "../../components/PrimaryButton"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"

function ResumeButton() {
	const { language } = useI18next()
	return (
		<PrimaryButton
			As={"a"}
			href={
				language === "de"
					? "/Maximilian Schaum - Lebenslauf Deutsch.pdf"
					: "/Maximilian Schaum - Resume English.pdf"
			}
		>
			<Trans>Lebenslauf herunterladen</Trans>
		</PrimaryButton>
	)
}

export default ResumeButton
