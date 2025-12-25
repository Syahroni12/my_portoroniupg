import { Navbar } from "@/components/Navbar";
import { CertificateSection } from "@/components/CertificateSection";

import { Footer } from "@/components/Footer";
import { ProjectsSection } from "@/components/ProjectsSection";
import Projects from "./Projects";

const Sertifikat = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <CertificateSection />
            </main>
            <Footer />
        </div>
    );
};

export default Sertifikat;