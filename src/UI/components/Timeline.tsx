import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faAnglesDown, faCircle } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"
import useCollapse from "react-collapsed"

type TimelineItemList = {
	description: string
	technologies?: string[]
	link?: {
		href: string
		text: string
	}
}

type TimelineItem = {
	title: string
	subtitle: string
	time: string
	info?: string
	list?: TimelineItemList[]
	buttons?: {
		text: string
		href: string
	}[]
}

function Timeline(props: { timeline: TimelineItem[] }) {
	return (
		<ul className="w-full text-white">
			{props.timeline.map((timelineItem, index) => {
				const isOdd = index % 2 !== 0

				return <TimelineItem isOdd={isOdd} item={timelineItem} key={index} />
			})}
		</ul>
	)
}

export default Timeline

function TimelineItem({ isOdd, item }: { isOdd: boolean; item: TimelineItem }) {
	return (
		<li
			className={clsx(
				"flex py-1 w-full pl-6 lg:pl-0",
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
					{item.time}
				</div>
			</div>
			<div className="flex flex-col items-center gap-4 pt-1">
				<FontAwesomeIcon icon={faCircle} size="sm" className="text-primary" />
				<div className="flex-grow w-px bg-white"></div>
			</div>
			<div className={clsx("flex-1 px-2 pb-16", isOdd && "lg:order-first")}>
				<div className="block mb-1 text-sm lg:hidden text-accent-400">
					{item.time}
				</div>
				<h2 className="mb-1 font-bold">{item.title}</h2>
				<h3 className="text-primary">{item.subtitle}</h3>

				{item.info && (
					<small className="italic text-accent-400">{item.info}</small>
				)}

				{item.list && <TimelineItemList list={item.list} isOdd={isOdd} />}

				{item.buttons && (
					<ul
						className={clsx(
							"flex flex-col gap-2 mt-8",
							isOdd && "lg:justify-end"
						)}
					>
						{item.buttons.map((button, index) => (
							<li key={index}>
								<a
									href={button.href}
									className="px-4 py-2 text-sm font-bold tracking-widest transition-colors text-accent bg-primary rounded-xl hover:bg-primary-400"
								>
									{button.text}
								</a>
							</li>
						))}
					</ul>
				)}
			</div>
		</li>
	)
}

function TimelineItemList({
	list,
	isOdd,
}: {
	list: TimelineItemList[]
	isOdd: boolean
}) {
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
		collapsedHeight: 300,
		duration: 500,
	})

	const isToggable = list.length > 3

	const getConditionalCollapseProps = () => {
		if (isToggable) return getCollapseProps()
	}

	return (
		<div className="relative mt-8 group">
			<ul
				className={clsx(
					"space-y-8 relative",
					isToggable &&
						"after:content-[''] after:absolute after:z-10 after:inset-0 after:pointer-events-none after:bg-gradient-to-b after:from-transparent after:to-accent after:transition-opacity after:duration-500",
					isToggable && !isExpanded && "after:opacity-100",
					isToggable && isExpanded && "after:opacity-0"
				)}
				{...getConditionalCollapseProps()}
			>
				{list.map((listItem, index) => (
					<li key={index} className="text-sm">
						{listItem.description}
						{listItem.technologies && (
							<ul
								className={clsx(
									"flex gap-2 flex-wrap mt-2",
									isOdd && "lg:justify-end"
								)}
							>
								{listItem.technologies.map((technology, index) => (
									<li
										key={index}
										className="px-1 py-px text-xs font-medium transition-colors rounded bg-accent-600 hover:bg-primary"
									>
										{technology}
									</li>
								))}
								{listItem.link && (
									<li className="px-1 py-px text-xs font-medium transition-colors rounded bg-primary hover:bg-primary-700">
										<a
											href={listItem.link.href}
											target="_blank"
											rel="noopener noreferer"
										>
											<FontAwesomeIcon icon={faArrowUpRightFromSquare} />{" "}
											{listItem.link.text}
										</a>
									</li>
								)}
							</ul>
						)}
					</li>
				))}
			</ul>
			{isToggable && (
				<button
					{...getToggleProps()}
					className={clsx(
						"absolute z-20 transition-all text-lg text-accent-400 rounded-full grid place-items-center w-8 h-8 hover:bg-accent-700 bg-transparent",
						isOdd
							? "right-[calc(100%+24px)] lg:right-0 lg:left-[calc(100%+24px)]"
							: "right-[calc(100%+24px)]",
						isExpanded ? "top-[calc(100%-30px)]" : "top-[calc(100%-30px)]"
					)}
				>
					<FontAwesomeIcon
						icon={faAnglesDown}
						className={clsx(
							"transition-transform duration-500",
							isExpanded ? "rotate-180" : "rotate-0"
						)}
					/>
				</button>
			)}
		</div>
	)
}
