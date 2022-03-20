import { AnchorLink } from "gatsby-plugin-anchor-links"
import React from "react"
import nav from "../../constants/nav"

function Header() {
	return (
		<header className="w-full py-4 bg-accent/70 text-white backdrop-blur-xl fixed top-0 z-40">
			<nav className="sectionwidth flex justify-between items-center">
				<AnchorLink
					to={"/#" + nav.Home}
					className="p-2 rounded-xl hover:bg-accent-600 text-xl font-extrabold tracking-tighter"
				>
					MS
				</AnchorLink>
				<ul className="flex gap-4">
					{Object.keys(nav).map((key) => (
						<li key={key}>
							<AnchorLink
								//@ts-ignore
								to={"/#" + nav[key]}
								className="p-2 rounded-xl hover:bg-accent-600 font-bold text-sm tracking-tighter"
							>
								{key}
							</AnchorLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
