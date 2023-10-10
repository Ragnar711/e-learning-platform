"use client";
import React from "react";
import SubjectCard from "../components/AnimatedSubjectCard";

const subjects = [
    {
        name: "Math",
        imageUrl: "/math.jpeg",
    },
    {
        name: "Physics",
        imageUrl: "/physics.png",
    },
];

const SubjectList = () => {
    return (
        <div className="flex flex-wrap">
            {subjects.map((subject, index) => (
                <SubjectCard
                    key={index}
                    subject={subject.name}
                    imageUrl={subject.imageUrl}
                />
            ))}
        </div>
    );
};

export default SubjectList;
