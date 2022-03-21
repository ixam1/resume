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
				required={props.required}
				placeholder={props.name + (props.required ? "*" : "")}
				className="block w-full pt-4 pb-3 placeholder-accent-200 border-0 border-b border-white rounded bg-accent-700 hover:bg-accent-600 focus:border-primary focus:bg-accent-600 focus:ring-0"
			/>
		</div>
	)
}

export default InputGroup
