import React, { useEffect, useRef } from "react"
//@ts-ignore
import Typewriter from "typewriter-effect/dist/core"

type Props = {
	strings: string[]
	className: string
}

function RotatingText({ strings, className }: Props) {
	const typewriterRef = useRef<HTMLElement | null>()

	useEffect(() => {
		const typewriter = new Typewriter(typewriterRef.current, {
			autoStart: true,
			loop: true,
			strings,
		})
		typewriter.start()
	}, [strings])

	return (
		<span className={className} ref={(el) => (typewriterRef.current = el)} />
	)
}

export default RotatingText
