import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { exerciseOptions, fetchData } from '../utils/fatchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
	const [search, setSearch] = React.useState('')
	const [bodyParts, setBodyParts] = React.useState([])

	React.useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

			setBodyParts(['all', ...bodyPartsData])
		}
		fetchExercisesData()
	}, [])


	const handleSearch = async () => {
		if (search) {
			const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
			console.log(exercisesData);

			const searchedExercises = exercisesData.filter((exercise) => exercise.target.toLowerCase().includes(search)
				|| exercise.equipment.toLowerCase().includes(search)
				|| exercise.bodyPart.toLowerCase().includes(search)
			);

			setSearch('')
			setExercises(searchedExercises)
		}
	}
	return (
		<Stack
			alignItems='center'
			mt='37px'
			p='20px'
			justifyContent='center'
		>
			<Typography fontWeight={700}
				sx={{ fontSize: { lg: '44px', xs: '30px' } }}
				mb='50px' textAlign='center'>
				Awoseme Exercise You <br />
				Should Know
			</Typography>
			<Box position='relative' mb='72px'>
				<TextField
					sx={{
						input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
						width: { lg: '800px', xs: '350px' },
						backgroundColor: 'white',
						borderRadius: '40px'
					}}
					height='76px'
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
					placeholder='Search Exercises'
					type='text'
				/>
				<Button className='search-btn'
					sx={{
						background: '#ff2625', color: '#fff', textTransform: 'none',
						width: { lg: '175px', xs: '80px' },
						fontSize: { lg: '20px', xs: '14px' },
						height: '56px',
						position: 'absolute',
						right: '0'
					}}
					onClick={handleSearch}
				>Search</Button>
			</Box>
			<Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
				<HorizontalScrollBar bodyPart={bodyPart} setBodyPart={setBodyPart} data={bodyParts} isBodyParts />
			</Box>
		</Stack>
	)
}

export default SearchExercises