const Navbar = ({text}) => {
    return  (
        <div class=" flex items-center justify-center h-[2rem] duration-[0.4s] ease-out px-[2vw] pr:2vw border-b-0 border-b-text tracking-[0.2vw] hover:tracking-[0.5vw] hover:cursor-pointer hover:border-b-amber-200 hover:border-b-2">
            <p>{text}</p>
        </div>
    )
}

export default Navbar