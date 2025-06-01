import { Navbar } from "../components/Navbar";
import { Landing } from "../components/Landing";
import { Work } from "../components/Work";
import { Play } from "../components/Play";
import { About } from "../components/About";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden container">
            {/* Theme Toggle Button */}

            {/* Background Effects */}

            {/* Navbar */}
            <Navbar />
            {/* Main Content*/}
            <Landing />
            <Work />
            <Play />
            <About />

            {/* Footer */}
            <Footer />
        </div>
    );
}