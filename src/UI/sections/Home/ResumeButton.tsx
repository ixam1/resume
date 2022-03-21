import { Link } from "gatsby"
import React from "react"
import PrimaryButton from "../../components/PrimaryButton"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

function ResumeButton() {
	return (
		<PrimaryButton As={Link} to="/">
			<Trans>Lebenslauf herunterladen</Trans>
		</PrimaryButton>
	)
}

export default ResumeButton
