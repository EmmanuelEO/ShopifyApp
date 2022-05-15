import React, { Fragment } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import ItemState from './context/item/ItemState'

const App = () => {
  return (
    <ItemState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
              </Routes>
            </div>
          </Fragment>
        </Router>
    </ItemState>
  )
}

export default App
