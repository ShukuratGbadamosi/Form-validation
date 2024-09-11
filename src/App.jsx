import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import CreateProduct from './Pages/CreateProduct'



function App() {


  return (
    <>

  <Routes>
    <Route path='/createproduct' element={<CreateProduct/>}> </Route> 


 
  </Routes>

    </>
  )
}

export default App