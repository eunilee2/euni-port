import { Navbar } from "../components/Navbar";
import { Landing } from "../components/Landing";
import { Work } from "../components/Work";
import { Connect } from "../components/Connect";
import { Marquee } from "../components/Marquee";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Spacer } from "../components/Spacer";
import { useEffect } from "react";

export const Home = () => {
    // scroll to sections with the correct offset
    useEffect(() => {
        const navigation = document.querySelector("#navbar");
        if (navigation) {
            const navigationHeight= navigation.offsetHeight;
            document.documentElement.style.setProperty(
                "--scroll-padding",
                `${navigationHeight*1.3}px`
            );
        }
    }, []);


    return (
        <div className="bg-background">
            {/* Theme Toggle Button */}

            {/* Background Effects */}

            {/* Navbar */}
            <Navbar className="fixed"/>
            {/* Main Content*/}
            <Landing />
            <Spacer />
            <Work />
            <Spacer />
            <About />
            {/* <Spacer /> */}
            <Connect />
            <Marquee />

            {/* Footer */}
            <Footer />
        </div>
    );
}