import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fatchData'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'


const ExerciseDetail = () => {
	const { id } = useParams()
	const [exerciseDetail, setExerciseDetail] = useState({})
	const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
	const [equipmentExercises, setEquipmentExercises] = useState([])

	React.useEffect(() => {
		const fetchExerciseData = async () => {
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
			const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

			const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
			setExerciseDetail(exerciseDetailData)

			const tarrgetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
			setTargetMuscleExercises(tarrgetMuscleExercisesData)

			const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
			setEquipmentExercises(equipmentExercisesData)
		}

		fetchExerciseData()
	}, [id])


	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos name={exerciseDetail.name} />
			<SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
		</Box>
	)
}

export default ExerciseDetail