import { faSend } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import PrimaryButton from "../../components/PrimaryButton"
import InputGroup from "./InputGroup"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

function ContactForm() {
	const { t } = useTranslation()
	return (
		<form
			name="Kontakt"
			method="POST"
			className="space-y-8 w-full"
			netlify-honeypot="bot-field"
			data-netlify="true"
		>
			<input type="hidden" name="form-name" value="Kontakt" />
			<p className="hidden">
				<label>
					Don’t fill this out if you’re human: <input name="bot-field" />
				</label>
			</p>
			<div className="grid md:grid-cols-2 gap-8">
				<InputGroup name="Name" required />
				<InputGroup name="E-Mail" type="email" required />
			</div>
			<InputGroup name={t("Nachricht")} type="textarea" rows={10} />
			<div className="flex justify-end">
				<PrimaryButton As="button" type="submit">
					<Trans>Absenden</Trans> <FontAwesomeIcon icon={faSend} />
				</PrimaryButton>
			</div>
		</form>
	)
}

export default ContactForm
