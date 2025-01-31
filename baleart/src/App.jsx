import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/App.css'
import Header from './components/Header'
import Customization from './components/Customization'
import Footer from './components/Footer'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="bg-violet-950 pt-2 pb-20 mb-20">
        <Customization />
      </div>
      <Footer />
    </>
  )
}