import { useEffect } from 'react';
import './Listados.css';
import { useDispatch } from 'react-redux';
import { Badge, Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function Listados({ projects, images, techs }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	console.log("Inicio de componentne");
	useEffect(() => {
		console.log("Entrada en use effect");
	}, [dispatch]);

	return (
		<div className='kcs-listado'>
			<Container>

				<Row>
					{projects.map((project) => {
						let resume = project.content.rendered + "";
						const header = project.acf?.imagen_cabecera;
						let imgSrc = "";
						if(header){
							imgSrc = images.find((img)=>  img.id == header);
							imgSrc = imgSrc?.source_url;
						}
						const techsIdArr = project.acf?.p_tecnologias;
						const techsObj = techsIdArr.map((id) => techs.find((tech) => tech.id == id));
						console.log(techsObj);
						resume = resume.replace(/<\/?\w*>/gi, "");
						resume = resume.substring(0, 100) + "...";
						console.log(project);
						return (
							<Col xs="12" sm="12" md="6" lg="4" xxl="3" className='mt-2'>

							<Card  key={project.id} className='m-1 p-2 kcs-card shadow-sm' onClick={() => {navigate("/"+project.id);}}>
								<Card.Header>
								<Card.Img src={imgSrc}/>
								<Card.Title>
									<div className='m-2'></div>
									{project.title.rendered}
								</Card.Title>
								</Card.Header>

								<Card.Body>
									{resume}
								</Card.Body>
								
								<Card.Footer>
								<Card.Body>
								<Stack direction="horizontal" gap={1}>
									{techsObj.map(tech => (
										<Badge pill bg="warning" text="dark" key={tech.id}>{tech.title.rendered}</Badge>
									))}
								</Stack>
								</Card.Body>
								</Card.Footer>
							</Card>
							</Col>
						)
					}
					)}
				</Row>
			</Container>
		</div>
	);
};

