export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f295feb704mshc3f58d3da5ce8c3p115ec2jsn14f230663b4d',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f295feb704mshc3f58d3da5ce8c3p115ec2jsn14f230663b4d',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json()
	return data
}