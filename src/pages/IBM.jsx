import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer'; 

export const IBM = () => {
    return (
        <div className="bg-background">
            <Navbar />
            <section id="IBM" className="flex max-w-8xl mx-auto px-12 py-12 text-[1.2rem]">
                <div className="bg-gray-800 w-1/3">
                    <p className="text-white">this is ibm</p>
                </div>
                <div className="bg-red-800 w-2/3">
                    <p className="text-white">this is ibm</p>
                </div>
            </section>
            <Footer />
        </div>
    );
}