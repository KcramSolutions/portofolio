import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { saludo } from '../../store/slices/hellowSlice';
import { Listados } from '../Listados/Listados';
import { loadMessage } from '../../store/sagas/helloSaga';
import { Main } from '../../pages/Main/Main';
import { ProjectSingle } from '../../pages/ProjectSingle/ProjectSingle';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Main} />
          <Route path='/:id' Component={ProjectSingle} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
