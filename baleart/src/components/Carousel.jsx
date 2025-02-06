import { useState } from 'react';

export default function Carousel(){
    const images = [
        'https://abcmallorcastorage.blob.core.windows.net/images/2012/03/GR65510-abc.jpg',
        'https://abcmallorcastorage.blob.core.windows.net/images/2012/03/GR65510-abc.jpg',
        'https://abcmallorcastorage.blob.core.windows.net/images/2012/03/GR65510-abc.jpg',
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto bg-black">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: "translateX(-" + (currentIndex * 100) + "%)" }}
                >
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={"Slide " + (index + 1)} className="w-full" />
                    ))}
                </div>
                {/*<div
                    class="absolute inset-x-[15%] bottom-5 py-5 text-center text-white block"
                >
                    <h1 class="text-xl sm:text-4xl font-bold drop-shadow-[0_10.2px_10.2px_rgba(0,0,0,0.8)]">Es Baluard</h1>
                </div>*/}
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-full"
            >
                &#10094; {/* HTML Left Arrow */}
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-full"
            >
                &#10095; {/* HTML Right Arrow */}
            </button>
            <div className="absolute bottom-[-4rem] left-0 right-0 flex justify-center items-center space-x-2 bg-black h-16">
                <h1 className="text-xl sm:text-4xl font-bold text-white drop-shadow-[0_10.2px_10.2px_rgba(0,0,0,0.8)] mb-2">Es Baluard</h1>
            </div>
        </div>
    );
}