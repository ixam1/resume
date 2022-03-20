import { faBars, faX } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Popover, Transition } from "@headlessui/react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import React, { Fragment } from "react"
import nav from "../../constants/nav"

function Header() {
	return (
		<Popover
			as="header"
			className="w-full py-4 bg-accent/70 text-white backdrop-blur-xl fixed top-0 z-40"
		>
			{({ open }) => (
				<>
					<nav className="sectionwidth flex justify-between items-center">
						<AnchorLink
							to={"/#" + nav.Home}
							className="p-2 rounded-xl hover:bg-accent-600 text-xl font-extrabold tracking-tighter"
						>
							MS
						</AnchorLink>
						<ul className="lg:flex gap-4 hidden">
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
						<Popover.Button className="p-2 rounded lg:hidden hover:bg-accent-600 font-bold">
							<FontAwesomeIcon icon={open ? faX : faBars} size="lg" />
						</Popover.Button>
					</nav>
					<Transition
						as={Fragment}
						enter="transition-all duration-300 ease-out overflow-hidden"
						enterFrom="transform max-h-0"
						enterTo="transform max-h-[50vh]"
						leave="transition-all duration-300 ease-in overflow-hidden"
						leaveFrom="transform max-h-[50vh]"
						leaveTo="transform max-h-0"
					>
						<Popover.Panel as="nav" className="space-y-4 p-4">
							{Object.keys(nav).map((key) => (
								<AnchorLink
									//@ts-ignore
									to={"/#" + nav[key]}
									className="py-2 px-4 rounded-xl block hover:bg-accent-600 font-bold text-sm tracking-tighter w-full"
								>
									{key}
								</AnchorLink>
							))}
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	)
}

export default Header
