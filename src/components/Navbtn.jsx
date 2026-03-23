const Navbar = ({text}) => {
    return  (
        <div className="flex duration-[0.4s] ease-out p-6 tracking-[0.2vw] hover:tracking-[0.5vw] hover:cursor-pointer hover:border-b-amber-200 hover:border-b-2">
            <p>{text}</p>
        </div>
    )
}

export default Navbar