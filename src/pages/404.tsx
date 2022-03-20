import { useEffect } from "react"
import { navigate } from "@reach/router"

const NotFound = () => {
	useEffect(() => {
		navigate("/")
	}, [])
	return null
}

export default NotFound
