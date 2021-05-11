import React, { useEffect, useContext } from "react";
import axios from "axios";
import MovieCard from "../MovieCard";
import CustomLoader from "../CustomLoader";
import { Context } from "../../context";
import { setData, setLoader, setInput } from "../../context/actions";

const specialUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MY_API_KEY}`;
const deafultUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MY_API_KEY}`;

function Movies() {
	const [{ data, input, loader }, dispatch] = useContext(Context);
	console.log(input);
	useEffect(() => {
		axios
			.get(input ? `${specialUrl}&query=${input}` : deafultUrl)
			.then(({ data }) => {
				dispatch(setData(data.results));
				dispatch(setLoader(false));
			})
			.catch((error) => {
				alert("Something went wrong.");
				dispatch(setLoader(false));
			});
	}, [input]);
	return (
		<>
			{loader ? (
				<CustomLoader />
			) : (
				<main className='mx-24'>
					<h1 className='text-3xl m-4 border-blue-600 border-2 inline-block p-2 text-blue-600'>
						{input ? `Searched : ${input}` : "Upcoming movies"}
					</h1>
					<div className='flex flex-wrap justify-center'>
						{data.length ? (
							data.map(({ title, backdrop_path, id }) => (
								<MovieCard title={title} url={backdrop_path} key={id} />
							))
						) : (
							<h1 className='my-32 text-3xl text-blue-600'>
								Nothing found for {input}...
							</h1>
						)}
					</div>
				</main>
			)}
		</>
	);
}

export default Movies;
