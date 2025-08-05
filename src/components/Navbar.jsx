import Navbtn from './Navbtn'

const Navbar = () => {
  return (
    <div class="fixed top-0 left-0 w-full z-50 flex justify-center bg-white/70 backdrop-blur-sm py-2">
      <Navbtn text="Home"/>
      <Navbtn text="Gallery"/>
      <Navbtn text="About"/>
    </div>
  )
}


export default Navbar