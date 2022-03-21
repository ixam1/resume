import { Link } from "gatsby"
import React from "react"
import AllSocialButtons from "../components/AllSocialButtons"

function Footer() {
	return (
		<footer className="w-full bg-accent text-white py-5">
			<div className="sectionwidth flex items-center justify-between flex-wrap gap-4">
				<div className="text-sm">
					Copyright © 2022 Maximilian Schaum -{" "}
					<Link to="/impressum" className="hover:underline">
						Impressum
					</Link>{" "}
					-{" "}
					<Link to="/datenschutz" className="hover:underline">
						Datenschutz
					</Link>
				</div>
				<AllSocialButtons />
			</div>
		</footer>
	)
}

export default Footer
