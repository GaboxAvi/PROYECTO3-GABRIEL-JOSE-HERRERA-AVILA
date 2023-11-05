import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages/index'
import Historial from './pages/historial'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Index />} />
      <Route path="/historial" element ={<Historial />} />
      <Route path="/*" element={<h1>Error 404 - Página no encontrada</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

