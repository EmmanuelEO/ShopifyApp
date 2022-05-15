import React, { Fragment } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Alerts from "./components/layout/Alerts";
import ItemState from './context/item/ItemState'
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <ItemState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Alerts />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
              </Routes>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </ItemState>
  )
}

export default App
