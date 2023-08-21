import react from 'react';
import './Footer.css';
import { Col, Row } from 'react-bootstrap';
 export function Footer({}){
	 return (
	 <>
	 <div className='kcs-footer p-5 text-white bg-dark'>
		<Row>
			<Col sm="12" lg="3">
				<h5>
					KCRAM SOLUTIONS
				</h5>
				<p>
				En KCram Solutions, estamos comprometidos con la excelencia en el desarrollo de software y la creación de soluciones innovadoras. Nuestro equipo apasionado trabaja incansablemente para superar tus expectativas y convertir tus ideas en realidad digital. Juntos, creamos el futuro, línea de código por línea de código.
				</p>
			</Col>
			<Col sm="12" lg={{span: 2, offset: 1}}  >

			</Col>
			<Col sm="12" lg="3">
				<h3>S&iacute;guenos en las redes</h3>
				<div className='list-group'>
						<a className='list-group-item list-group-item-warning list-group-item-action' href="https://github.com/KcramSolutions"> GitHub </a>
						<a className='list-group-item list-group-item-warning list-group-item-action' href="https://www.linkedin.com/company/kcramsolutions/"> LinkedIn </a>
						<a className='list-group-item list-group-item-warning list-group-item-action' href="https://www.instagram.com/kcram.solutions/"> Instagram </a>
						<a className='list-group-item list-group-item-warning list-group-item-action' href="https://kcramsolutions.es/blog/"> Blog </a>
						<a className='list-group-item list-group-item-warning list-group-item-action' href="https://www.facebook.com/people/KCram-Solutions/100094112834801/"> Meta | Facebook </a>
				</div>
			</Col>
		</Row>
	 </div>
	 </>)
}