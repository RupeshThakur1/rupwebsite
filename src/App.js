import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyOwnApp from './Componetns/MyApp/MyOwnApp';
import Contact from './Componetns/MyApp/Contact';
import Images from './Componetns/MyApp/Images';
import More from './Componetns/MyApp/More';
import WorkingOn from './Componetns/MyApp/WorkingOn';
import Skills from './Componetns/MyApp/Skills';
import Experience from './Componetns/MyApp/Exprience';
import Notes from './Componetns/MyApp/Notes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyOwnApp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/images" element={<Images />} />
        <Route path="/more" element={<More />} />
        <Route path="/workingon" element={<WorkingOn />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/exprience" element={<Experience />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;