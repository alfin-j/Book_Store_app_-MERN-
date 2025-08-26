import { Outlet } from 'react-router-dom' 
import './App.css'
import Footer from './components/Footer'
function App() {

  return (
    <>
    
    {/* px-4 py-6 */}
    <main className='min-h-screen max-w-screen-1xl mx-auto  font-primary'>      
      <Outlet />
    </main>
    <Footer/>
    </>
  )
}

export default App
