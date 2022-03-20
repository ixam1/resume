import { useEffect, useState } from "react"
import nav from "../constants/nav"

function throttle(timeFrame: number, func: () => void) {
	var lastTime = 0
	return function () {
		var now = Date.now()
		if (now - lastTime >= timeFrame) {
			func()
			lastTime = now
		}
	}
}

const offsetPx = -300
const throttleMs = 250

const useActiveSectionId = () => {
	const [activeSectionId, setActiveSectionId] = useState(nav.Home)

	const calculateActiveSection = throttle(throttleMs, () => {
		let currentSection

		const targets = Object.values(nav)
			.map((id) => document.getElementById(id))
			.filter(Boolean)

		for (let i = 0; i < targets?.length; i++) {
			const target = targets[i]

			if (!target || !(target instanceof Element)) continue

			if (target.getBoundingClientRect().top + offsetPx < 0) {
				currentSection = target.id
				continue
			}

			break
		}

		setActiveSectionId(currentSection || "")
	})

	useEffect(() => {
		window.addEventListener("scroll", calculateActiveSection)

		return () => {
			window.removeEventListener("scroll", calculateActiveSection)
		}
	}, [])

	return activeSectionId
}

export default useActiveSectionId
