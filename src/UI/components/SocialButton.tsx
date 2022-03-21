import { IconProp } from "@fortawesome/fontawesome-svg-core"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

type Props = {
	url: string
	icon: IconProp
	name: string
}

function SocialButton(props: Props) {
	return (
		<a
			href={props.url}
			target="_blank"
			title={props.name}
			rel="noopener noreferrer"
			className="text-xl text-white rounded-full grid place-items-center w-10 h-10 hover:bg-accent-600 bg-transparent transition-colors"
		>
			<FontAwesomeIcon icon={props.icon} />
		</a>
	)
}

export default SocialButton
