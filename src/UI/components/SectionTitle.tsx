import React, { useEffect, useMemo, useRef } from "react"
import useOnScreen from "../../hooks/useOneScreen"

type Props = {
	children: React.ReactNode
}

function SectionTitle(props: Props) {
	const wrapperRef = useRef<HTMLElement | null>(null)

	const first = useRef(false)

	const onScreen = useOnScreen(wrapperRef)

	useEffect(() => {
		const allUnderlined = wrapperRef.current?.querySelectorAll("u")

		allUnderlined?.forEach((el) => {
			el.className =
				"no-underline bg-no-repeat bg-gradient-to-r from-primary transition-all duration-1000 to-primary bg-[length:0%_20%] bg-[position:0%_90%]"
		})
	}, [])

	useEffect(() => {
		if (onScreen && !first.current) {
			first.current = true

			const allUnderlined = wrapperRef.current?.querySelectorAll("u")

			allUnderlined?.forEach((el) => {
				setTimeout(() => {
					el.classList.remove("bg-[length:0%_20%]")
					el.classList.add("bg-[length:100%_20%]")
				}, 1000)
			})
		}
	}, [onScreen])

	return (
		<h2
			className="text-4xl font-bold text-center text-white"
			ref={(el) => (wrapperRef.current = el)}
		>
			{props.children}
		</h2>
	)
}

export default SectionTitle
