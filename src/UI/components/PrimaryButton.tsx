import React from "react"

type Props = {
	children: React.ReactNode
	As?: React.ElementType
	[key: string]: any
}

function PrimaryButton({ As = "button", ...props }: Props) {
	return (
		<As
			{...props}
			className={
				"px-5 py-4 relative border-transparent border-2 rounded-xl group text-accent w-full sm:w-auto inline-block text-center tracking-widest font-bold " +
				props.className
			}
		>
			<span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-50 filter blur-sm bg-gradient-to-br from-primary-600 to-primary-400"></span>
			<span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-xl opacity-50 from-primary-600 to-primary-400"></span>
			<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-xl shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-primary-600 to-primary-400"></span>
			<span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-xl bg-gradient-to-br to-primary-600 from-primary-400"></span>
			<span className="relative">{props.children}</span>
		</As>
	)
}

export default PrimaryButton
