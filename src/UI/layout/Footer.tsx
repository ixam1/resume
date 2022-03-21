import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import AllSocialButtons from "../components/AllSocialButtons"

function Footer() {
	return (
		<footer className="w-full bg-accent-900 text-white py-5">
			<div className="sectionwidth flex items-center justify-between flex-wrap gap-4">
				<div className="text-sm">
					© 2022 Maximilian Schaum -{" "}
					<Link language="de" to="/impressum" className="hover:underline">
						Impressum
					</Link>{" "}
					-{" "}
					<Link language="de" to="/datenschutz" className="hover:underline">
						Datenschutz
					</Link>
				</div>
				<AllSocialButtons />
			</div>
		</footer>
	)
}

export default Footer
