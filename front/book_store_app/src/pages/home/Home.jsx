import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'
import News from './News'
import backgroundImg from '../../assets/navback.jpg';  // Adjust the path as needed

const Home = () => {
  return (
    <div 
  className="relative bg-cover bg-center min-h-screen" 
  style={{ backgroundImage: `url(${backgroundImg})` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-75 z-10"></div>

  {/* Content */}
  <div className="relative z-20">
    <Banner />
    <TopSellers />
    <Recommended />
    <News />
  </div>
</div>

  )
}

export default Home

