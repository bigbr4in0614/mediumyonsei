import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contentbox from './components/Contentbox'
import Instruction from './components/Instruction'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Playground from './components/Playground';

ReactDOM.render(
    <Router>
      <Routes>
       <Route path='/' element={<Contentbox />}></Route> 
       <Route path='/instruction' element={<Instruction/> }></Route>
       <Route path='/playground' element={<Playground/> }></Route>
      </Routes>
    </Router>,
  document.getElementById('root')
);

