import { Link } from "gatsby"
import React from "react"
import AllSocialButtons from "../components/AllSocialButtons"

function Footer() {
	return (
		<footer className="w-full bg-accent text-white py-5">
			<div className="sectionwidth flex items-center justify-between">
				<div className="text-sm">
					Copyright © 2022 Maximilian Schaum -{" "}
					<Link to="/impressum" className="hover:underline">
						Impressum
					</Link>
				</div>
				<AllSocialButtons />
			</div>
		</footer>
	)
}

export default Footer
