import introimage from '/images/landing-img.jpg'
const Intro = (props) => {
    return (
        <div class="intro-wrapper w-[100vw] pt-5 relative">
            <div class="relative bg-[url(./images/landing-img.jpg)] w-full h-100 bg-center bg-cover mask-l-from-80% mask-r-from-80%">
                <div class="intro-text-wrapper w-full text-6xl absolute text-center top-[40%] z-2">
                <h1 class="font-dancing">Shelly Oliveira</h1>
            </div>
            </div> 
            
        </div>
        
    )
}

export default Intro
