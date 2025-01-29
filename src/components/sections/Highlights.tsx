import React from "react";
import { Link } from "react-router-dom";

const images: string[] = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image6.png",
    "/images/image7.png",
    "/images/image8.png",
];

const ImageCarousel: React.FC = () => {
    return (
        <Link to={"/gallery"}>
        <div className="w-full p-5 overflow-hidden">
            <div className="relative w-full">
                <div className="flex animate-looping">
                    <div className="flex gap-5 shrink-0">
                        {images.map((src, index) => (
                            <img
                                key={`img-${index}`}
                                className="w-[200px] h-[300px] object-cover rounded-lg"
                                src={src}
                                alt={`Image ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className=" pl-2 flex gap-5 shrink-0">
                        {images.map((src, index) => (
                            <img
                                key={`img-dup-${index}`}
                                className="w-[200px] h-[300px] object-cover rounded-lg"
                                src={src}
                                alt={`Image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default ImageCarousel;