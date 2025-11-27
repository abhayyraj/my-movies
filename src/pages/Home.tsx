import { MovieContext } from "../store/MovieContext";
import { useState } from "react";
import CustomSection from "../components/CustomSection";
import { type DescriptionCardsType } from "./types";
import Divider from "../components/Divider";
import Card from "../components/Card";

const descriptionCardsContent: DescriptionCardsType[] = [
    {
        id: "site-description",
        heading: "What is this ?",
        description: [
            "Some of the good things in my life I can count are movies. I have always enjoyed my time watching a great movie, whether it be a movie that makes me think or one that makes me deliriously happy.",
            "Hopefully anyone reading this finds a gem as well :) and maybe you can suggest one too!"
        ]
    },
    {
        id: "technical-description",
        heading: "Why is this ?",
        description: [
            "I want to make stuff, anything, and movies are a huge part of me so why not integrate it into my stuff.",
            "I'm tired of just thinking and not doing, no more of this, no more of me living like this, I will do it!"
        ]
    }
];

function Home() {
    const [selectedMovie, setSelectedMovie] = useState('');
    return (
        <MovieContext value={{selectedMovie, setSelectedMovie}}>
            <header className="mb-[48px]">
                <h1 className="text-[84px] text-[#FFC400] font-bold">My movies</h1>
            </header>
            <section className="mb-[24px]">
                <h2 className="text-[#FF3F7F] text-[36px]">A little context</h2>
                <Divider className="bg-[#FF3F7F]" />
            </section>
            <article className="mb-[48px]">
                {descriptionCardsContent.map((descriptionCard, index) => (
                    <CustomSection
                        key={index}
                        id={descriptionCard.id}
                        heading={descriptionCard.heading}
                        desc={descriptionCard.description}
                        className={(index !== descriptionCardsContent.length - 1) ? "mb-[24px]" : ""}
                    />
                ))}
            </article>
            <main className="pb-[400px]">
                <section className="mb-[24px]">
                    <h2 className="text-[#FF3F7F] text-[36px]">My favorites</h2>
                    <Divider className="bg-[#FF3F7F]" />
                </section>
                <div><Card /></div>
            </main>
        </MovieContext>
    );
};

export default Home;