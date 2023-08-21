import react from 'react';
import './BarraNavegación.css';
import { Row } from 'react-bootstrap';
import menu from '../../utils/menu';
import { Link } from 'react-router-dom';
 export function BarraNavegación({}){
	 return (
		<nav className='kcs-navbar'>
			<div className="kcs-return">
			</div>
			<div className="kcs-logo" ><img src="https://kcramsolutions.es/wp-content/uploads/2023/04/simbolo-256x256-1.png" alt="" /></div>
			{/* <div className="title m-2 text-uppercase ">Proyectos</div> */}
			<Link to="/" className='kcs-nav-link'>
				Proyectos
			</Link>
			<div className='kcs-back'>
				<a href='https://kcramsolutions.es'>Volver</a>
			</div>

		</nav>
	 )
}