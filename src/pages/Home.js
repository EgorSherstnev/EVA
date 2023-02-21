import React from "react";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import OurProjects from "../partials/OurProjects";
import WriteEmail from "../partials/WriteEmail";

function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
           <Header />

           {/*  Page content */}
            <main className="grow">
                {/*  Page sections */}
                <HeroHome />
                <FeaturesBlocks />
                <OurProjects />
                <WriteEmail />
            </main>
        </div>
    );
}

export default Home;