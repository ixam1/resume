import React from "react"
import RotatingText from "./RotatingText"

function PageTitle() {
	const strings = [
		"heiße Maximilian Schaum.",
		"bin ein Webentwickler.",
		"liebe Front-End.",
		"scheue auch kein Back-End.",
	]

	return (
		<h1 className="text-center w-full text-white">
			<span className="block text-3xl font-bold mb-4">Hallo 👋</span>
			<span className="block font-extrabold text-6xl">
				Ich <RotatingText strings={strings} className="text-primary" />
			</span>
		</h1>
	)
}

export default PageTitle
