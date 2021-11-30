import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/main/main-page.component';
import ExamplePage from './pages/example/example-page.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/example" element={<ExamplePage/>} />
      </Routes>
    </div>
  );
}

export default App;
