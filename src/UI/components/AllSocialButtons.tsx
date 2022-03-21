import React from "react"
import socials from "../../constants/socials"
import SocialButton from "./SocialButton"

function AllSocialButtons() {
	return (
		<ul className="flex gap-4">
			{socials.map((social, index) => (
				<li key={index}>
					<SocialButton
						icon={social.icon}
						url={social.url}
						name={social.name}
					/>
				</li>
			))}
		</ul>
	)
}

export default AllSocialButtons
