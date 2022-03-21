import clsx from "clsx"
import React from "react"

type Props = {
	children: React.ReactNode
	id?: string
	fullscreen?: boolean
	className?: string
}

function Section(props: Props) {
	return (
		<section
			id={props.id}
			className={clsx(
				"w-full relative",
				props.fullscreen && "min-h-screen grid place-items-center",
				props.className
			)}
		>
			<div className="flex flex-col items-center gap-12 w-full sectionwidth sectionpadding">
				{props.children}
			</div>
		</section>
	)
}

export default Section
