import { useState } from 'react';

const Gallery = ({ images }) => {
    const [imageClicked, setImageClicked] = useState(null);

    return (
        <div class="w-[100vw]">
            <h1 class="text-center text-2xl pt-22 pb-10">Gallery</h1>
            <div class=" px-5 grid sm:grid-cols-2 md:grid-cols-3  grid-cols-1 w-[100%] gap-5 place-items-center">
                {images.map((src, idx) => (
                    <div 
                        key={idx} 
                        className="overflow-hidden bg-white rounded-xl hover:cursor-pointer flex justify-center items-center duration-300"
                    >
                        <img 
                            src={src} 
                            alt={`Artwork ${idx + 1}`} 
                            className="w-full h-auto transition-transform duration-700 ease-in-out hover:scale-105 object-contain"
                            onClick={() => setImageClicked(src)}>
                        </img>

                    </div>
                ))}
                
            </div>

            {imageClicked && (
            <div 
                class="fixed flex inset-0 items-center justify-center z-50" 
                onClick={() => setImageClicked(null)}>
                <img src={imageClicked} alt="expanded art" 
                    className="max-w-[80vw] max-h-[80vh] z-50 cursor-pointer animate-fadeIn duration-400">

                 </img>
                 <div class=" z-25 fixed w-[100vw] h-[100vh] bg-black opacity-50">
                 </div>
            </div>
            )}

        </div> 
    );
};

export default Gallery;