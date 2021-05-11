import React from "react";

interface MovieCardProps {
	title: string;
	url: string;
}

function MovieCard({ title, url }: MovieCardProps) {
	return (
		<div className='mx-4 my-2 w-full sm:w-64'>
			<img
				src={
					url
						? `https://image.tmdb.org/t/p/original/${url} `
						: "https://www.bigraildiversity.co.uk/wp-content/uploads/2018/10/Night-at-the-Movies-Converted-900x600.png"
				}
				alt={title}
				className='w-full ring-gray-800 ring-2 my-4 transform hover:scale-110 transition duration-500 h-96'
			/>
			<h1 className='font-semibold text-xl'>{title}</h1>
		</div>
	);
}

export default MovieCard;
