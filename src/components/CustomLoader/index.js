import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
import Loader from "react-loader-spinner";
let rootNode = document.getElementById("root");

const CustomLoader = () => {
	useEffect(() => {
		rootNode.style.opacity = 0.5;
		rootNode.style.overflow = "hidden";
		return () => {
			rootNode.style.opacity = 1;
			rootNode.style.overflow = "unset";
		};
	}, []);

	return ReactDOM.createPortal(
		<div className='w-full h-96 flex justify-center items-center'>
			<Loader type='Oval' color='#2563EB' />
		</div>,
		document.getElementById("loader-root")
	);
};

export default CustomLoader;
