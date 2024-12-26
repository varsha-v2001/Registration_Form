import { Route, Routes } from 'react-router-dom'
import './App.css'
import Display from './pages/Display'
import Landing from './pages/Landing'
import { useState } from 'react'



function App() {

  
  const [details,setDetails]=useState({
    name:"",gender:"",dob:"",address:"",contactNo:"",email:"",course:""
  })


  return (
    <>



      <Routes>
        <Route path='/' element={<Landing setDetails={setDetails} />}/>
        <Route path='/candidatedetails' element={<Display details={details} />} />
      </Routes>
    </>
  )
}

export default App
