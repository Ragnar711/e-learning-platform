"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedClassCard from "./components/AnimatedClassCard";

export default function Home() {
    const cardData = [
        { grade: "الاولى", imageUrl: "/1st.jpg", url: "1st" },
        { grade: "الثانية", imageUrl: "/2nd.jpg", url: "1st" },
        { grade: "الثالثة", imageUrl: "/3rd.jpg", url: "1st" },
        { grade: "الرابعة", imageUrl: "/4th.png", url: "1st" },
        { grade: "الخامسة", imageUrl: "/5th.png", url: "1st" },
        { grade: "السادسة", imageUrl: "/6th.jpg", url: "1st" },
    ];
    return (
        <div>
            <Header />
            <div
                className="flex items-center justify-around flex-wrap m-2"
                id="content"
            >
                {cardData.map((card, index) => (
                    <AnimatedClassCard
                        grade={card.grade}
                        imageUrl={card.imageUrl}
                        key={index}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}
