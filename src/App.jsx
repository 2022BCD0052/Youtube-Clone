import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import Sidebar from './components/Sidebar'

import { Feeds } from './components/Feed/Feeds'
// import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div>

       <Navbar/>

 
   <div className="flex top-12 relative mt-4">
    <Sidebar/>
    <Feeds/>
    </div>
    
 


</div>

  )
}

export default App
