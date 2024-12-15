import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Missing from './components/Missing';
import Home from './components/Home';
import About from './components/About';
import AddJoke from './components/AddJoke';
import Jokes from './components/Jokes';
import Footer from './components/Footer';

function App() {
  const categories = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Programming' },
    { id: 2, name: 'Animals' },
    { id: 3, name: 'Technology' },
    { id: 4, name: 'Food' },
    { id: 5, name: 'Miscellaneous' }, 
    { id: 6, name: 'Dad Jokes' },
  ];

  return (
    <div className='App'>
        <Navbar categories={categories}/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='addJoke' element={<AddJoke />}></Route>
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/category/:categoryId" element={<Jokes />} />
          <Route path='*' element={<Missing />}></Route>
        </Routes>
        <Footer />
      </div>
  )
}

export default App
