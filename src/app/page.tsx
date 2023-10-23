"use client";

import { useState } from "react";
import { NextPage } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedClassCard from "./components/AnimatedClassCard";

interface Grade {
    grade: string;
    imageUrl: string;
    url: string;
    subjects: string[];
}

const Home: NextPage = () => {
    const [showFirstDiv, setShowFirstDiv] = useState(true);
    const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);

    const cardData: Grade[] = [
        {
            grade: "الاولى",
            imageUrl: "/1st.jpg",
            url: "1st",
            subjects: ["Subject 1", "Subject 2", "Subject 3"],
        },
        {
            grade: "الثانية",
            imageUrl: "/2nd.jpg",
            url: "2nd",
            subjects: ["Subject 4", "Subject 5", "Subject 6"],
        },
        {
            grade: "الثالثة",
            imageUrl: "/3rd.jpg",
            url: "1st",
            subjects: ["Subject 4", "Subject 5", "Subject 6"],
        },
        {
            grade: "الرابعة",
            imageUrl: "/4th.png",
            url: "1st",
            subjects: ["Subject 4", "Subject 5", "Subject 6"],
        },
        {
            grade: "الخامسة",
            imageUrl: "/5th.png",
            url: "1st",
            subjects: ["Subject 4", "Subject 5", "Subject 6"],
        },
        {
            grade: "السادسة",
            imageUrl: "/6th.jpg",
            url: "1st",
            subjects: ["Subject 4", "Subject 5", "Subject 6"],
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
                    <div className="flex flex-col h-screen overflow-auto">
                        <button
                            className="relative top-0 left-0 m-4 w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                            onClick={() => toggleDivs(null)}
                        >
                            Return
                        </button>
                        <ul className="flex flex-row justify-center items-center gap-10">
                            {selectedGrade.subjects.map((subject, index) => (
                                <li key={index}>
                                    <button className="subject-button">
                                        {subject}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
