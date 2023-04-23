import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
	// debugger
	return (
		<Box
			sx={{ mt: { lg: '100px', xs: '0' }, }}
			p={2}
		>
			<Typography variant='h3' mb={2} >
				Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
			</Typography>

			<Stack direction='row'
				sx={{ p: '2', position: 'relative', mb: '40px' }}
			>
				{targetMuscleExercises.length
					? (<HorizontalScrollBar data={targetMuscleExercises} />)
					: (<Loader />)
				}
			</Stack>

			<Typography variant='h3' mb={2}>
				Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
			</Typography>

			<Stack direction='row'
				sx={{ position: 'relative' }}
			>
				{equipmentExercises.length
					? (<HorizontalScrollBar data={equipmentExercises} />)
					: (<Loader />)
				}
			</Stack>
		</Box>
	)
}

export default SimilarExercises