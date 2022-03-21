import { faSend } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import PrimaryButton from "../../components/PrimaryButton"
import InputGroup from "./InputGroup"

function ContactForm() {
	return (
		<form name="Kontakt" className="space-y-8 w-full" data-netlify="true">
			<div className="grid md:grid-cols-2 gap-8">
				<InputGroup name="Name" required />
				<InputGroup name="E-Mail" type="email" required />
			</div>
			<InputGroup name="Nachricht" type="textarea" rows={10} />
			<div className="flex justify-end">
				<PrimaryButton As="button" type="submit">
					Absenden <FontAwesomeIcon icon={faSend} />
				</PrimaryButton>
			</div>
		</form>
	)
}

export default ContactForm
