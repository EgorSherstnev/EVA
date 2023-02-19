import React from "react";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";

function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
           <Header />

           {/*  Page content */}
            <main className="grow">
                {/*  Page sections */}
                <HeroHome />
            </main>
        </div>
    );
}

export default Home;