import Head from "next/head"
import {FC} from "react"
import {Navbar} from "../ui"

interface Props {
	title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'Pokemon App'}</title>
				<meta name="author" content="JMQ-dev" />
				<meta name="description" content={`Info about pokemon ${title}`} />
				<meta name="keywords" content={`${title}, pokemon, pokedex`} />
			</Head>

			{/* Navbar */}
			<Navbar />
			
			<main style={{ padding: '0px 20px' }}>
				{children}
			</main>
		</>
	)
}
