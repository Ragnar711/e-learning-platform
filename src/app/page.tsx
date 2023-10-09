"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedCard from "./components/AnimatedCard";

export default function Home() {
    const cardData = [
        { grade: "1st", imageUrl: "/1st.jpg" },
        { grade: "2nd", imageUrl: "/2nd.jpg" },
        { grade: "3rd", imageUrl: "/3rd.jpg" },
        { grade: "4th", imageUrl: "/4th.png" },
        { grade: "5th", imageUrl: "/5th.png" },
        { grade: "6th", imageUrl: "/6th.jpg" },
    ];
    return (
        <div>
            <Header />
            <div className="flex flex-wrap -m-4" id="content">
                {cardData.map((card, index) => (
                    <AnimatedCard
                        key={index}
                        grade={card.grade}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}
