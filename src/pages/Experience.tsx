
import { Navbar } from "@/components/Navbar";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";

const Experience = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <ExperienceSection />
            </main>
            <Footer />
        </div>
    );
};

export default Experience;
