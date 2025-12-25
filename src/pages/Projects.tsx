import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Projects = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <ProjectsSection />
            </main>
            <Footer />
        </div>
    );
};

export default Projects;