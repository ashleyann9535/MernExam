import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './components/Main';
import Form from './components/Form';
import Details from './components/Details';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Main />} />
          <Route path='/form' element={<Form/>} />
          <Route path='/details/:id' element={<Details/>} />
          <Route path='/edit/:id' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
