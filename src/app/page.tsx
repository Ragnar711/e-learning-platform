"use client";
import { useState } from "react";
import { NextPage } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedClassCard from "./components/AnimatedClassCard";

interface Subject {
    name: string;
    imageUrl: string;
}

interface Grade {
    grade: string;
    imageUrl: string;
    url: string;
    subjects: Subject[];
}

const Home: NextPage = () => {
    const [showFirstDiv, setShowFirstDiv] = useState(true);
    const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);

    const cardData: Grade[] = [
        {
            grade: "السنة الاولى",
            imageUrl: "/1st.jpg",
            url: "1st",
            subjects: [
                { name: "رياضيات", imageUrl: "/math.png" },
                { name: "ايقاظ علمي", imageUrl: "/sc.png" },
                { name: "انتاج كتابي", imageUrl: "/write.png" },
                { name: "قراءة", imageUrl: "/arabic.png" },
            ],
        },
    ];

    const toggleDivs = (grade: Grade | null) => {
        setSelectedGrade(grade);
        setShowFirstDiv(!showFirstDiv);
    };

    return (
        <div>
            <Header />
            <div>
                {showFirstDiv && (
                    <div
                        className="flex items-center justify-around flex-wrap m-2 h-screen overflow-auto"
                        id="content1"
                    >
                        {cardData.map((card, index) => (
                            <AnimatedClassCard
                                grade={card.grade}
                                imageUrl={card.imageUrl}
                                key={index}
                                onClick={() => toggleDivs(card)}
                            />
                        ))}
                    </div>
                )}

                {!showFirstDiv && selectedGrade && (
                    <div className="flex items-center justify-around flex-wrap m-2 h-screen overflow-auto">
                        <button
                            className="relative top-0 left-0 m-4 w-20 bg-indigo-900 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                            onClick={() => toggleDivs(null)}
                        >
                            عودة
                        </button>
                        {selectedGrade.subjects.map((subject, index) => (
                            <AnimatedClassCard
                                grade={subject.name}
                                imageUrl={subject.imageUrl}
                                key={index}
                            />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
