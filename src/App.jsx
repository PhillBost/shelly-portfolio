import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Gallery from './components/Gallery'
import AboutMe from './components/AboutMe';

const gallery = [
  '/images/landing-img.jpg',
  '/images/landing-img.jpg',
  '/images/landing-img.jpg',
  '/images/landing-img.jpg'
];

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Intro/> 
      <Gallery images={gallery}/>
      <AboutMe/>
    </div>
    
  )
  
    
}

export default App;
