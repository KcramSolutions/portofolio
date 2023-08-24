import react from 'react';
import './EmptyList.css';
import { Col, Container, Row } from 'react-bootstrap';
import literals from '../../utils/literals';

 export function EmptyList({}){
	 return (<div className='kcs-mt'>
		<Container>
		<Row xs={12} md={12} lg={12}>
			<Col >
			<p className='display-3 text-secondary text-uppercase'>
				{literals.listado.empty}
			</p>
			</Col>
		</Row>
		</Container>
	 </div>)
}