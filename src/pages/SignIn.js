import React from "react";
import { Link } from "react-router-dom";

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';

function SignIn() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
           {/* Site header */}
           <Header />

           {/* Page content */}
           <main className="grow">

                {/* Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration />
                </div>

           </main>
        </div>
    );
}

export default SignIn;