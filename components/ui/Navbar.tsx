import {Spacer, Text, useTheme} from "@nextui-org/react"
import Image from "next/image"

export const Navbar = () => {
	const { theme } = useTheme()

	return (
		<div style={{ 
				display: 'flex', 
				width: '100%',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'start',
				backgroundColor: theme?.colors.gray900.value,
				padding: '0px, 20px',
			}}>
			<Image 
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
				alt="app icon"
				width={70}
				height={70}
			/>
			<Text color='white' h2>P</Text>
			<Text color='white' h3>okemon</Text>
			<Spacer css={{ flex: 1 }} />
			<Text color='white'>Loved</Text>
		</div>
	)
}
