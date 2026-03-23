import { useState, useEffect} from 'react';
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from "@cloudinary/url-gen"


const cld = new Cloudinary({
    cloud: {
        cloudName: 'dkajgvxvp'
    }
})
const Gallery = () => {
    const [imageClicked, setImageClicked] = useState(null);
    const [images, setImages] = useState([]);

    // fetch artwork when Gallery is mounted in DOM
    useEffect(() => {
    fetch('/api/art-images')
        .then(res => res.json())
        .then(publicIds => setImages(publicIds));
    }, []);


    return (
        <div class="w-full">
            <h1 class="text-center text-3xl pt-12 pb-10">Gallery</h1>
            <div class=" px-5 grid sm:grid-cols-2 md:grid-cols-3  grid-cols-1 w-[100%] gap-5 place-items-center">
                {images.map((src, idx) => {
                    const cldImg = cld.image(src.public_id);

                    return (
                        <div 
                            className="overflow-hidden bg-white rounded-xl hover:cursor-pointer flex justify-center items-center duration-300"
                        >
                            <AdvancedImage
                                key={idx}
                                cldImg={cldImg}
                                alt={`Artwork ${idx + 1}`} 
                                className="w-full h-auto transition-transform duration-700 ease-in-out hover:scale-105 object-contain"
                                onClick={() => setImageClicked(src)}>
                            </AdvancedImage>

                        </div>
                    );
                })}
                
            </div>

            {imageClicked && (
            <div 
                class="fixed flex inset-0 items-center justify-center z-50" 
                onClick={() => setImageClicked(null)}>
                <div class="grid-cols-1 z-50">
                    <AdvancedImage 
                        cldImg={cld.image(imageClicked.public_id)}  
                        alt="expanded art"
                        className="z-50 cursor-pointer animate-fadeIn duration-400">
                    </AdvancedImage>
                    <p class="w-full text-center">{imageClicked.display_name}</p>
                </div>  
                 <div class=" z-25 fixed w-full h-[100vh] bg-black opacity-50"></div>

            </div>
            )}

        </div> 
    );
};

export default Gallery;

