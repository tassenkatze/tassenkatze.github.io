import Header from './components/Header';
import AboutMe from './Pages/AboutMe';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
                <Route path='/' element={<AboutMe/>} />
                <Route path='/projects' element={<Projects />} />
                </Routes>
        </Router>
    </div>
  );
}

export default App;