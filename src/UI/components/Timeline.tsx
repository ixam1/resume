import { faCircle } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import { Link } from "gatsby"
import React from "react"
import PrimaryButton from "./PrimaryButton"

type Props = {
	timeline: {
		title: string
		subtitle: string
		time: string
		info?: string
		items?: {
			description: string
			technologies?: string[]
		}[]
		buttons?: {
			text: string
			href: string
		}[]
	}[]
}

function Timeline(props: Props) {
	return (
		<ul className="text-white w-full">
			{props.timeline.map((timeline, index) => {
				const isOdd = index % 2 !== 0

				return (
					<li
						key={index}
						className={clsx(
							"flex py-1 w-full",
							isOdd ? "lg:text-right" : "text-left"
						)}
					>
						<div
							className={clsx(
								"flex-1 px-2 hidden lg:block",
								isOdd && "lg:order-last"
							)}
						>
							<div
								className={clsx(
									"w-full text-accent-400 text-sm",
									isOdd ? "text-left" : "text-right"
								)}
							>
								{timeline.time}
							</div>
						</div>
						<div className="flex flex-col items-center gap-4 pt-1">
							<FontAwesomeIcon
								icon={faCircle}
								size="sm"
								className="text-primary"
							/>
							<div className="flex-grow bg-white w-px"></div>
						</div>
						<div
							className={clsx("flex-1 px-2 pb-16", isOdd && "lg:order-first")}
						>
							<div className="block lg:hidden text-accent-400 text-sm mb-1">
								{timeline.time}
							</div>
							<h2 className="mb-1 font-bold">{timeline.title}</h2>
							<h3 className="text-primary">{timeline.subtitle}</h3>
							{timeline.info && (
								<small className="text-accent-400 italic">
									{timeline.info}
								</small>
							)}
							<ul className="flex flex-col gap-8">
								{timeline.items?.map((item, index) => (
									<li key={index} className="text-sm first:mt-8">
										{item.description}
										{item.technologies && (
											<ul
												className={clsx(
													"flex gap-2 flex-wrap mt-2",
													isOdd && "lg:justify-end"
												)}
											>
												{item.technologies.map((technology, index) => (
													<li
														key={index}
														className="rounded bg-accent-600 px-1 py-px text-xs font-medium hover:bg-primary transition-colors"
													>
														{technology}
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
							{timeline.buttons && (
								<ul
									className={clsx(
										"flex flex-col gap-2 mt-8",
										isOdd && "lg:justify-end"
									)}
								>
									{timeline.buttons.map((button, index) => (
										<li key={index}>
											<Link
												to={button.href}
												className="text-accent font-bold bg-primary tracking-widest text-sm px-4 py-2 rounded-xl hover:bg-primary-400 transition-colors"
											>
												{button.text}
											</Link>
										</li>
									))}
								</ul>
							)}
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export default Timeline
