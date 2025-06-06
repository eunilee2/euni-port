import { Navbar } from "../components/Navbar";
import { Landing } from "../components/Landing";
import { Work } from "../components/Work";
import { Connect } from "../components/Connect";
import { Marquee } from "../components/Marquee";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Spacer } from "../components/Spacer";

export const Home = () => {
    return (
        <div className="bg-background">
            {/* Theme Toggle Button */}

            {/* Background Effects */}

            {/* Navbar */}
            <Navbar />
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