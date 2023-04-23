import React from 'react'
import { exerciseOptions, fetchData } from '../utils/fatchData'
import { Box, Stack, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'
import Pagination from '@mui/material/Pagination';

const Exercises = ({ setExercises, bodyPart, exercises }) => {

	const [currentPage, setCurrentPage] = React.useState(1)
	const [exercisesPerPage] = React.useState(9)

	React.useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = [];
			if (bodyPart === 'all') {
				exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
			} else {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
			}
			setExercises(exercisesData)
		}
		fetchExercisesData()
	}, [bodyPart])





	// PAGINATION 
	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

	const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


	const paginate = (event, value) => {
		setCurrentPage(value)
		window.scroll({ top: 1800, behavior: 'smooth' })
	}



	return (
		<Box id="exercises"
			sm={{ mt: { ld: '110px' } }}
			mt="50px"
			p="20px"
		>
			<Typography variant='h4'
				mb='46px'
			>
				Showing Results
			</Typography>
			<Stack
				direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }}
				flexWrap='wrap' justifyContent='center'
			>
				{currentExercises.map((exercise, idx) => (
					<ExerciseCard key={idx} exercise={exercise} />
				))}
			</Stack>
			<Stack mt='100px' alignItems='center'>
				{exercises.length > 9 && (
					<Pagination
						color="standard"
						shape="rounded"
						defaultPage={1}
						count={Math.ceil(exercises.length / currentPage)}
						page={currentPage}
						onChange={paginate}
						size='large'
					/>
				)}
			</Stack>
		</Box>
	)
}

export default Exercises