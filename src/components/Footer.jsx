import React from 'react'
import Logo from '../assets/images/Logo-1.png'
import { Box, Stack, Typography } from '@mui/material'

const Footer = () => {
	return (
		<Box mt='80px' bgcolor='#fff3f4' >
			<Stack alignItems='center' gap='40px' pt='24px'>
				<img src={Logo} alt="Logo" width='200px' height='41px' />
				<Typography variant='h5' textAlign="center" pb="40px">
					Made with ❤️ by Vitaliy Chernysh
				</Typography>
			</Stack>
		</Box>
	)
}

export default Footer