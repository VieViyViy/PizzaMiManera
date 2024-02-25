import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './page/HomePage';
import PizzaPage from './page/PizzaPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path='/HomePage' element={<HomePage/>} />
          <Route path='/PizzaPage' element={<PizzaPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;