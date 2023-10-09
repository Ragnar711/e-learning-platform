import React from "react";
import Image from "next/image";

const AnimatedCard = ({
    grade,
    imageUrl,
}: {
    grade: string;
    imageUrl: string;
}) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={`Grade ${grade} Image`}
                    width={300}
                    height={150}
                    className="object-cover"
                />
                <div className="p-4">
                    <p className="text-lg font-semibold text-gray-800">
                        Grade {grade}
                    </p>
                    <p className="text-sm text-gray-600">E-learning platform</p>
                </div>
            </div>
        </div>
    );
};

export default AnimatedCard;
