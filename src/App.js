import './App.css';
import { Routes, Route } from 'react-router-dom'
import { HomePage, QuizPage, FinalPage } from './pages';

function App() {
  return (
    <div className="App">
      <div className='rootEl'>
        <Routes>
          <Route path='/' element={ <HomePage /> }></Route>
          <Route path='/quiz' element={ <QuizPage /> }></Route>
          <Route path='/result' element={ <FinalPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
