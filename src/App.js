import './App.css';
import { Routes, Route } from 'react-router-dom'
import { HomePage, QuizPage, FinalPage } from './pages';

function App() {
  return (
    <div className="App">
      <div className='rootEl'>
        <Routes>
          <Route exact path='/' element={ <HomePage /> } />
          <Route exact path='/quiz' element={ <QuizPage /> } />
          <Route exact path='/result' element={ <FinalPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
