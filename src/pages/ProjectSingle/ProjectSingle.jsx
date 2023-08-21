import react, { useEffect, useState } from 'react';
import './ProjectSingle.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_PROJECT } from '../../store/sagas/proyectSaga';
import { BarraNavegación } from '../../components/BarraNavegación/BarraNavegación';
import { Badge, Carousel, Col, Container, Image, Ratio, Row, Stack } from 'react-bootstrap';
import { KCSLoader } from '../../components/KCSLoader/KCSLoader';
import { EmptyList } from '../../components/EmptyList/EmptyList';
import { Footer } from '../../components/Footer/Footer';
export function ProjectSingle({ }) {

	const { id } = useParams();
	const project = useSelector(state => state.project);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!id) {
			navigate("/");
			return;
		}
		dispatch({ type: FETCH_PROJECT, payload: id });
	}, [])

	function parseDate(date, separator = "/") {
		const data = [
			date.substr(6),
			date.substr(4, 2),
			date.substr(0, 4),
		]
		return data.join(separator);
	}

	
		if (project.hasError)
			return (<>
				<BarraNavegación />
				<Container className='m-5 text-center text-secondary'>
					<h4> { JSON.parse(project.error).message} </h4>
				</Container>
			</>)
		else if (!project.loading)
			return (<>
				<BarraNavegación />
				<div className='kcs-project-main' style={{ backgroundImage: `url(${project.data.header.source_url})` }}>
					<div className='kcs-project-title-div'>
						<h1 className='kcs-project-title display-1'>
							{project.data.title.rendered}
						</h1>
						<h1>
							{parseDate(project.data.acf.fecha_del_proyecto)}
						</h1>
						<Stack direction="horizontal" gap={1}>

							{project.data.techs?.map(tech => {
								return (<Badge pill key={tech.id} bg="warning" text="dark">{tech.title.rendered}</Badge>)
							})}
						</Stack>
					</div>

				</div>
				<Container style={{ width: "50%", margin: "5rem auto", minWidth: "300pt" }}>
					<h2>Descripci&oacute;n</h2>
					<div dangerouslySetInnerHTML={{ __html: project.data.content.rendered }} />
					<Row>
						{project.data.video != null ? (<Col sm="12" xl="6">
							<h3 className='mt-4'>V&iacute;deo</h3>
							<Ratio aspectRatio="16x9" className='mb-4'>
								<video controls type={project.data.video.mime_type} src={project.data.video.source_url} allowFullScreen ></video>
							</Ratio>
						</Col>) : (<></>)}

						{project.data.galery != null ? (<Col>
							<h3 className='mt-4'>Galer&iacute;a</h3>
							<Carousel>
								{project.data.galery.map(img => {
									return (
										<Carousel.Item key={img.id}>
											<Image src={img.source_url} fluid style={{ maxWidth: '100%', maxHeight: "200rem" }} />
										</Carousel.Item>
									)
								})}
							</Carousel>
						</Col>) : (<></>)}
					</Row>


				</Container>
				<Footer/>
			</>)
	else {
		return (
			<>
				<div className='kcs-overlay'>
					<div className='kcs-loading-container'>
						<KCSLoader size={8} />
					</div>
				</div>
			</>
		)
	}
}