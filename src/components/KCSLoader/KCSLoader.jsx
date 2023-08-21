import react from 'react';
import './KCSLoader.css';
 export function KCSLoader({size}){
	let dimension = size?? 3;
	 return (<div style={{width: dimension + "rem", height: dimension + "rem"}} className='kcs-loader'>
		<div className='kcs-k'></div>
	 </div>)
}