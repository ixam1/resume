import {
	faMapMarkerAlt,
	faMobile,
	faEnvelope,
} from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import contact from "../../../constants/contact"

const contactIcons = [
	{
		title: "Ruf mich an",
		icon: faMobile,
		text: contact.phone,
		linkPre: "tel:",
	},
	{
		title: "Schreib mir eine E-Mail",
		icon: faEnvelope,
		text: contact.email,
		linkPre: "mailto:",
	},
	{
		title: "Finde mich in",
		icon: faMapMarkerAlt,
		text: contact.address,
	},
]

function ContactIcons() {
	return (
		<ul className="space-y-12 text-white">
			{contactIcons.map((item, index) => (
				<li key={index} className="flex flex-col items-center">
					<FontAwesomeIcon icon={item.icon} size="2x" />
					<h3 className="font-medium text-primary mt-4 mb-1">{item.title}</h3>
					{item.linkPre ? (
						<a
							className="underline hover:text-primary-200"
							href={`${item.linkPre}${item.text}`}
						>
							<span>{item.text}</span>
						</a>
					) : (
						<p>{item.text}</p>
					)}
				</li>
			))}
		</ul>
	)
}

export default ContactIcons
