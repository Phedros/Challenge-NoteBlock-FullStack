import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import ListNotesComponent from './components/ListNotesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ListNotesComponent stateFilter="active" />}></Route>
            <Route exact path='/archives' element={<ListNotesComponent stateFilter="archive" />}></Route>
            <Route path="*" element={<Navigate to ="/" />}/>
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
