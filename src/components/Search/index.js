import React, { useContext, useRef } from "react";
import { Context } from "../../context";
import { setInput } from "../../context/actions";

function Search() {
	const [{}, dispatch] = useContext(Context);
	const InputRef = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		const input = InputRef.current.value;
		dispatch(setInput(input));
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Search...'
				ref={InputRef}
				className='w-32 sm:w-64 mx-4 sm:mx-12 p-1 font-semibold rounded'
			/>
			<button type='submit' className='text-white ring-white ring-2 px-2 py-1'>
				Search
			</button>
		</form>
	);
}

export default Search;
