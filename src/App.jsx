import { NavBar } from "./components/navbar";
import { Banner } from "./components/banner";
import { AboutMeSection } from "./components/aboutMe";
import { FeaturedProjectsSection } from "./components/featuredProjects";
import { ExperiencesSection } from "./components/experiences";
import { OtherProjectsSection } from "./components/otherProjects";
import { WaveFooter } from "./components/footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col min-h-dvh bg-purple-100">
        <Banner />
        <FeaturedProjectsSection />
        <OtherProjectsSection />
        <ExperiencesSection />
        <AboutMeSection />
        <WaveFooter />
      </div>
    </>
  );
}

export default App;
