import React from "react"

type Props = {
	name: string
	required?: boolean
	rows?: number
	type?: "text" | "email" | "textarea"
}

function InputGroup({ type = "text", ...props }: Props) {
	const Element = type === "textarea" ? "textarea" : "input"

	return (
		<div className="border-b-2 rounded border-accent-700 focus-within:border-primary">
			<Element
				type={type === "textarea" ? undefined : type}
				rows={props.rows}
				placeholder={props.name + (props.required ? "*" : "")}
				className="block w-full pt-4 pb-3 placeholder-white border-0 border-b border-white rounded bg-accent-600 hover:bg-accent-700 focus:border-primary focus:bg-accent-700 focus:ring-0"
			/>
		</div>
	)
}

export default InputGroup
