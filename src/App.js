import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './page/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path='/HomePage' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;