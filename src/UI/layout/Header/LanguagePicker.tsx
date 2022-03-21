import { Popover, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import { Helmet } from "react-helmet"

function LanguagePicker({
	languages,
	setLanguage,
	language,
	className,
}: {
	languages: string[]
	setLanguage: (language: string) => void
	language: string
	className?: string
}) {
	return (
		<Popover className={"relative " + className}>
			<Helmet>
				{languages.map((lang) => (
					<link rel="preload" as="image" href={`/${lang}.png`}></link>
				))}
			</Helmet>
			<Popover.Button className={"p-2 rounded-xl hover:bg-accent-600"}>
				<img
					src={`/${language}.png`}
					width={20}
					height={20}
					loading="eager"
					title={language.toUpperCase()}
				/>
			</Popover.Button>
			<Transition
				as={Fragment}
				enter="transition-all duration-300"
				enterFrom="opacity-0 translate-y-4"
				enterTo="opacity-100 translate-y-0"
				leave="transition-all duration-300"
				leaveTo="opacity-0 translate-y-4"
				leaveFrom="opacity-100 translate-y-0"
			>
				<Popover.Panel className={"absolute top-full flex flex-col gap-2"}>
					{languages
						.filter((lang) => lang !== language)
						.map((lang) => (
							<button
								key={lang}
								className={"p-2 rounded-xl hover:bg-accent-600"}
								onClick={() => setLanguage(lang)}
							>
								<img
									title={lang.toUpperCase()}
									key={lang}
									src={`/${lang}.png`}
									width={20}
									height={20}
									loading="eager"
								/>
							</button>
						))}
				</Popover.Panel>
			</Transition>
		</Popover>
	)
}

export default LanguagePicker
