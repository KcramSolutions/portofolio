import React, { useEffect } from 'react';
import "./Main.css";
import { KCSLoader } from '../../components/KCSLoader/KCSLoader';
import { useDispatch, useSelector } from 'react-redux';
import { RUN_MAIN_WINDOW } from '../../store/sagas/mainWindowSaga';
import { Listados } from '../../components/Listados/Listados';
import { EmptyList } from '../../components/EmptyList/EmptyList';
import { BarraNavegación } from '../../components/BarraNavegación/BarraNavegación';
import { Footer } from '../../components/Footer/Footer';
import { Card, Container } from 'react-bootstrap';

export function Main({ }) {
    const mainData = useSelector(state => state.mainWindow);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: RUN_MAIN_WINDOW });
    }, [])
    if (mainData.loading)
        return (
            <>
                <div className='kcs-overlay'>
                    <div className='kcs-loading-container'>
                        <KCSLoader size={8} />
                        <p>
                            {mainData.loadingMessage}
                        </p>
                    </div>
                </div>
            </>
        );
    else if (mainData.projects.length > 0) {
        return (
            <>
                <BarraNavegación />
                <div className='m-2'></div>
                <Container>
                    <Card>
                        <Card.Body>

                            <h2>Bienvenido</h2>
                            <p>
                            Bienvenido a nuestra galería de proyectos, donde la innovación y la excelencia se unen para dar vida a soluciones de software sobresalientes. En nuestra empresa consultora, cada proyecto es una historia única de desafíos superados, colaboración creativa y resultados excepcionales. Sumérgete en un mundo de creación digital mientras exploras una muestra de nuestros proyectos más destacados.
                            </p>
                            
                            <p>
                                En KCram, estamos listos para llevar tus ideas al mundo digital y crear soluciones que marquen la diferencia. ¡Un futuro digital emocionante te espera!
                            </p>
                        </Card.Body>
                    </Card>
                </Container>
                <div className='m-3'></div>

                <Listados className="mt-3 pt-4" projects={mainData.projects} images={mainData.headers} techs={mainData.techs}></Listados>
                <Footer></Footer>
            </>
        )
    } else if (mainData.projects.length === 0) {
        return (
            <EmptyList />
        )

    } else {
        return (
            <>
                <BarraNavegación />
                <div>Hay errores</div>
                <Footer></Footer>
            </>
        )
    }
}