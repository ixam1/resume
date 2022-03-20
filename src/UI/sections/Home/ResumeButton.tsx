import { Link } from "gatsby"
import React from "react"
import PrimaryButton from "../../components/PrimaryButton"

function ResumeButton() {
	return (
		<PrimaryButton As={Link} to="/">
			Lebenslauf herunterladen
		</PrimaryButton>
	)
}

export default ResumeButton
