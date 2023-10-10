import React, { useState } from "react";
import Image from "next/image";

const SubjectCard = ({
    subject,
    imageUrl,
}: {
    subject: string;
    imageUrl: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cardStyle = {
        transform: isHovered ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.3s ease",
    };

    const contentStyle = {
        color: isHovered ? "black" : "gray",
    };

    return (
        <div
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 m-4 hover:cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={cardStyle}
        >
            <div
                className="bg-white shadow-lg rounded-lg overflow-hidden"
                style={contentStyle}
            >
                <Image
                    src={imageUrl}
                    alt={`${subject} Image`}
                    width={200}
                    height={100}
                    className="object-cover mx-auto"
                />
                <div className="p-4">
                    <p className="text-lg font-semibold">{subject}</p>
                    <p className="text-sm">مادة تعليمية</p>
                </div>
            </div>
        </div>
    );
};

export default SubjectCard;
