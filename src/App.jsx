import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Gallery from './components/Gallery'
import AboutMe from './components/AboutMe';





function App() {

  return (
    <div className="w-full">
      <Navbar/>
      <Intro/> 
      <Gallery/>
      <AboutMe/>
    </div>
    
  )
  
    
}

export default App;
