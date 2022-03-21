import { faBars, faX } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Popover, Transition } from "@headlessui/react"
import clsx from "clsx"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import React, { Fragment } from "react"
import nav from "../../../constants/nav"
import useActiveSectionId from "../../../hooks/useActiveSectionId"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import LanguagePicker from "./LanguagePicker"

function Header() {
	const { t } = useTranslation()
	const { languages, changeLanguage, defaultLanguage, language } = useI18next()
	const activeSectionId = useActiveSectionId()
	const linkPrePath = language === defaultLanguage ? "" : `/${language}`

	return (
		<Popover
			as="header"
			className="w-full py-4 bg-accent/70 text-white backdrop-blur-xl fixed top-0 z-40"
		>
			{({ open }) => (
				<>
					<nav className="sectionwidth flex justify-between items-center">
						<AnchorLink
							to={linkPrePath + "/#" + nav.Home}
							className="p-2 rounded-xl hover:bg-accent-600 text-xl font-extrabold tracking-tighter text-primary"
						>
							MS
						</AnchorLink>
						<ul className="lg:flex gap-4 items-center hidden">
							{Object.entries(nav).map(([name, id]) => (
								<li key={name} className="relative text-center">
									<AnchorLink
										to={linkPrePath + "/#" + id}
										className={clsx(
											"p-2 rounded-xl hover:bg-accent-600 font-bold text-sm tracking-tighter",
											id === activeSectionId && "text-primary"
										)}
									>
										{t(name)}
									</AnchorLink>
									<div
										className={clsx(
											"absolute top-[125%] left-1/2 -translate-x-1/2 rounded-full b w-2 h-2 bg-primary transition-opacity",
											id === activeSectionId ? "opacity-100" : "opacity-0"
										)}
									/>
								</li>
							))}
							<LanguagePicker
								language={language}
								languages={languages}
								setLanguage={changeLanguage}
							/>
						</ul>

						<div className="flex gap-4 lg:hidden items-center">
							<LanguagePicker
								language={language}
								languages={languages}
								setLanguage={changeLanguage}
							/>
							<Popover.Button
								title="Mobile Menu"
								className="p-2 rounded hover:bg-accent-600 font-bold"
							>
								<FontAwesomeIcon icon={open ? faX : faBars} size="lg" />
							</Popover.Button>
						</div>
					</nav>
					<Transition
						as={Fragment}
						enter="transition-all duration-300 ease-out overflow-hidden"
						enterFrom="max-h-0"
						enterTo="max-h-[50vh]"
						leave="transition-all duration-300 ease-in overflow-hidden"
						leaveFrom="max-h-[50vh]"
						leaveTo="max-h-0"
					>
						<Popover.Panel as="nav" className="space-y-4 p-4">
							{Object.entries(nav).map(([name, id]) => (
								<AnchorLink
									key={name}
									to={linkPrePath + "/#" + id}
									className={clsx(
										"py-2 px-4 rounded-xl block hover:bg-accent-600 font-bold text-sm tracking-tighter w-full",
										id === activeSectionId && "bg-primary/30"
									)}
								>
									{t(name)}
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
