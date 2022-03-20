import { StaticImage } from "gatsby-plugin-image"
import React from "react"

function Avatar() {
	return (
		<StaticImage
			src="../../../images/Maximilian_Schaum.jpg"
			className="rounded-full overflow-hidden "
			alt="Maximilian Schaum"
			width={250}
			height={250}
			quality={100}
		/>
	)
}

export default Avatar
