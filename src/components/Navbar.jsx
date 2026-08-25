import Navbtn from './Navbtn'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center bg-white/70 backdrop-blur-sm py-2">
      <Navbtn text="Home" target="home" />
      <Navbtn text="Gallery" target="gallery"/>
      <Navbtn text="About" target="about"/>
    </div>
  )
}


export default Navbar