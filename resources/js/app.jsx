import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Components/Projects';
import About from './Components/About';
import AllPythonProjects from './Components/Projects/AllPythonProjects';
import AllReactProjects from './Components/Projects/AllReactProjects';
import AllRustProjects from './Components/Projects/AllRustProjects';
import Cv from './Components/cv';
import Contact from './Components/contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects/python" element={<AllPythonProjects />} />
                <Route path="/projects/react" element={<AllReactProjects />} />
                <Route path="/projects/rust" element={<AllRustProjects />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
