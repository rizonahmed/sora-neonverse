import React, { useState, useEffect } from 'react';
import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';
import responsiveone from './assets/responsiveone.png';
import responsivetwo from './assets/responsivetwo.png';
import responsivethree from './assets/responsivethree.png';

const desktopImages = [one, two, three];
const mobileImages = [responsiveone, responsivetwo, responsivethree];

const Partnership = () => {
    const [visibleImages, setVisibleImages] = useState([0]);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
            setVisibleImages(window.innerWidth >= 1024 ? [0, 1] : [0]);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Fade-out effect
            setTimeout(() => {
                setVisibleImages((prevVisible) => {
                    const nextIndex = (prevVisible[prevVisible.length - 1] + 1) % desktopImages.length;
                    return screenSize >= 1024 ? [prevVisible[prevVisible.length - 1], nextIndex] : [nextIndex];
                });
                setFade(true); // Fade-in effect
            }, 500); // Smooth transition timing (0.5s)
        }, 4000);

        return () => clearInterval(interval);
    }, [screenSize]);

    const images = screenSize < 768 ? mobileImages : desktopImages;

    return (
        <div className="bg-[#12100C] p-6 text-center">
            <h2 className="text-white text-4xl font-semibold pb-7 pt-10">Partnership</h2>
            <div className="flex gap-14 justify-center py-10 lg:px-40">
                {visibleImages.map((index) => (
                    <img
                        key={index}
                        src={images[index]}
                        alt={`Slide ${index + 1}`}
                        className={`w-3/3 sm:px-8 lg:px-0 lg:w-2/3 2xl:w-2/3 h-auto transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Partnership;
