import { Outlet } from 'react-router-dom' 
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <Navbar/>
    {/* px-4 py-6 */}
    <main className='min-h-screen max-w-screen-2xl mx-auto  font-primary'>      
      <Outlet />
    </main>
    <Footer/>
    </>
  )
}

export default App
