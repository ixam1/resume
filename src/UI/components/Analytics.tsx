import React from "react"
import { Helmet } from "react-helmet"

function Analytics() {
	return (
		<Helmet>
			<script async defer>
				{`if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"max.schaum4@gmail.com",utcoffset:"1"}))};sessionStorage.setItem("_swa","1");`}
			</script>
		</Helmet>
	)
}

export default Analytics
