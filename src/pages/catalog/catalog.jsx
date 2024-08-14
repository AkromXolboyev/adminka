// import React, { useState, useEffect } from "react";
// import { useGetCatalog } from "../../service/query/useGetCatalog";
// // import { ArrowLeftIcon } from "../../assets/svg/ArrowLeftIcon";
// // import { ArrowRightIcon } from "../../assets/svg/ArrowRightIcon";
// // import { Button } from "../../ui/button/button";

// // Carousel Component
// export const Catalog = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const { data: catalog = [], isLoading, error } = useGetCatalog()

//     useEffect(() => {
//         if (catalog.length > 0) {
//             const intervalId = setInterval(() => {
//                 setCurrentIndex((prevIndex) => (prevIndex + 1) % catalog.length);
//             }, 2000);
    
//             return () => clearInterval(intervalId); // Cleanup the interval on unmount
//         }
//     }, [catalog.length]);
    

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error loading catalog.</div>;

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % catalog.length);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + catalog.length) % catalog.length);
//     };

//     return (
//         <div className="relative w-[241px] max-w-screen-2xl mx-auto">
//             <div className="overflow-hidden">
//                 <div
//                     className="flex transition-transform duration-500 ease-in-out"
//                     style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                 >
//                     {catalog?.map((banner, index) => (
//                         <div key={index} className="w-[241px] flex-shrink-0">
//                             <img src={banner.img} alt={banner.id} className="w-[241px] h-auto object-cover" />
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Navigation buttons */}
//             {/* <Button onClick={prevSlide} className="absolute left-2 lg:left-10 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full flex justify-center">
//         <ArrowLeftIcon/>
//       </Button>
//       <Button onClick={nextSlide} className="absolute right-2 lg:right-10 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full flex justify-center">
//         <ArrowRightIcon/>
//       </Button> */}

//             {/* Pagination Dots */}
//             <div className="flex justify-center mt-1">
//                 {catalog.map((_, index) => (
//                     <div
//                         key={index}
//                         onClick={() => setCurrentIndex(index)}
//                         className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${currentIndex === index ? "bg-primary" : "bg-secondary"}`}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//     );
// };

import React, { useState, useEffect } from "react";
import axios from "axios";

// Catalog Component
const Catalog = () => {
    const [catalog, setCatalog] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Ma'lumotlarni olish uchun useEffect hookidan foydalanamiz
    useEffect(() => {
        axios.get("http://localhost:3600/catalog")
            .then((response) => {
                setCatalog(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <div>Yuklanmoqda...</div>;
    if (error) return <div>Xatolik yuz berdi: {error.message}</div>;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % catalog.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + catalog.length) % catalog.length);
    };

    return (
        <div className="relative w-full max-w-screen-2xl mx-auto container">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                >
                    {catalog.map((banner, index) => (
                        <div key={banner.id} className="w-[241px] flex-shrink-0">
                            <img src={banner.img} alt={banner.title} className="w-full h-auto object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Tugmalar va navigatsiya */}
            <button onClick={prevSlide} className="absolute left-2 lg:left-10 top-1/2 transform -translate-y-1/2">
                Oldingi
            </button>
            <button onClick={nextSlide} className="absolute right-2 lg:right-10 top-1/2 transform -translate-y-1/2">
                Keyingi
            </button>

            {/* Slayder nuqtalari */}
            <div className="flex justify-center mt-1">
                {catalog.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${currentIndex === index ? "bg-primary" : "bg-secondary"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
