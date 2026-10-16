import { useState, useEffect } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dkajgvxvp",
  },
});

// Used only when the local API isn't available, so the gallery UI can be
// previewed without starting the backend or connecting to Cloudinary.
const previewImages = [
  {
    public_id: "preview-for-sale",
    display_name: "Preview artwork with a buy link",
    localSrc: "/images/landing-img.jpg",
    shopifyUrl: "https://example.com/preview-product",
  },
  {
    public_id: "preview-not-for-sale",
    display_name: "Preview artwork without a buy link",
    localSrc: "/images/landing-img.jpg",
    shopifyUrl: null,
  },
];

const Gallery = () => {
  const [imageClicked, setImageClicked] = useState(null);
  const [images, setImages] = useState([]);
  const [isPreview, setIsPreview] = useState(false);

  // Fetch artwork when Gallery mounts
  useEffect(() => {

    const API_URL = import.meta.env.PROD 
    ? import.meta.env.VITE_API_URL
    : '';

    fetch(`${API_URL}/api/art-images`)
      .then((res) => {
        if (!res.ok) throw new Error(`Gallery API returned ${res.status}`);
        return res.json();
      })
      .then((publicIds) => setImages(publicIds))
      .catch((error) => {
        console.error("Could not load artwork:", error);
        if (import.meta.env.DEV) {
          setImages(previewImages);
          setIsPreview(true);
        }
      });
  }, []);

  return (
    <section id="gallery" className="w-full bg-white">
      
      {/* Gallery heading */}
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-24 md:px-12">
        
        <div className="text-center">
          <p className="mb-3 text-xs tracking-[0.45em] text-black/50">
            ARTWORK
          </p>

          <h1 className="font-dancing text-6xl leading-none md:text-8xl">
            Gallery
          </h1>

          {/* Thin divider */}
          <div className="mx-auto mt-7 h-px w-20 bg-black" />

          <p className="mx-auto mt-6 max-w-lg text-sm italic leading-relaxed text-black/60">
            A collection of paintings
          </p>
        </div>
        {isPreview && (
          <p className="mt-6 text-center text-xs tracking-wide text-black/45">
            Local preview data — this artwork and product link are examples.
          </p>
        )}
      </div>

      {/* Gallery grid */}
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-12">
        <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {images.map((src, idx) => {
            const cldImg = src.localSrc ? null : cld.image(src.public_id);
            return (
              <article
                key={src.public_id}
                className="w-full"
              >
                <button
                  type="button"
                  className="
                    group relative block w-full overflow-hidden
                    bg-neutral-50 text-left transition-transform duration-500
                    hover:-translate-y-1 focus:outline-none
                    focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4
                  "
                  onClick={() => setImageClicked(src)}
                  aria-label={`View ${src.display_name || `Artwork ${idx + 1}`}`}
                >
                  {src.localSrc ? (
                    <img
                      src={src.localSrc}
                      alt={src.display_name || `Artwork ${idx + 1}`}
                      className="block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <AdvancedImage
                      cldImg={cldImg}
                      alt={src.display_name || `Artwork ${idx + 1}`}
                      className="block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  )}

                  {/* Artwork title overlay */}
                  <div
                    className="
                      absolute inset-x-0 bottom-0 translate-y-full
                      bg-white/90 px-5 py-4 backdrop-blur-sm
                      transition-transform duration-500 group-hover:translate-y-0
                    "
                  >
                    <p className="text-sm tracking-[0.15em] text-black">
                      {src.display_name || `Artwork ${idx + 1}`}
                    </p>
                  </div>
                </button>

                {src.shopifyUrl && (
                  <a
                    href={src.shopifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center border-b border-black/40 px-1 text-xs tracking-[0.2em] text-black/75 transition-colors hover:border-black hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                  >
                    BUY PRINTS <span className="ml-2" aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* Expanded artwork modal */}
      {imageClicked && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setImageClicked(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded view of ${imageClicked.display_name}`}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Artwork */}
          <div
            className="relative z-10 flex max-h-[90vh] max-w-[90vw] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            {imageClicked.localSrc ? (
              <img
                src={imageClicked.localSrc}
                alt={imageClicked.display_name}
                className="h-auto max-h-[80vh] w-auto max-w-[90vw] object-contain animate-fadeIn"
              />
            ) : (
              <AdvancedImage
                cldImg={cld.image(imageClicked.public_id)}
                alt={imageClicked.display_name}
                className="h-auto max-h-[80vh] w-auto max-w-[90vw] object-contain animate-fadeIn"
              />
            )}

            <p className="mt-4 text-center text-sm tracking-[0.15em] text-white">
              {imageClicked.display_name}
            </p>

            <button
              type="button"
              className="
                mt-4
                text-xs
                tracking-[0.2em]
                text-white/60
                transition-colors
                hover:text-white
              "
              onClick={() => setImageClicked(null)}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
