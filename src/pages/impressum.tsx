import React from "react"
import Analytics from "../UI/components/Analytics"
import Section from "../UI/components/Section"
import Seo from "../UI/components/Seo"
import Layout from "../UI/layout/Layout"

function impressum() {
	return (
		<Layout>
			<Seo noIndex />
			<Analytics />
			<Section fullscreen className="bg-accent">
				<div className="prose prose-invert">
					<h1>Impressum</h1>
					<h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
					<p>
						Maximilian Schaum
						<br />
						Alfred-D&ouml;blin-Allee 12
						<br />
						12529 Sch&ouml;nfeld
					</p>
					<h2>Kontakt</h2>
					<p>
						Telefon: 01622715832
						<br />
						E-Mail: max.schaum4@gmail.com
					</p>
					<a target="_blank" href="https://icons8.de/icon/set/flags/doodle">
						Flaggen
					</a>{" "}
					icons von{" "}
					<a target="_blank" href="https://icons8.com">
						Icons8
					</a>
				</div>
			</Section>
		</Layout>
	)
}

export default impressum
