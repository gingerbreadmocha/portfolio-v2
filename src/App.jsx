import { Banner } from "./components/banner";
import { FeaturedProjectsSection } from "./components/featuredProjects";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4 h-dvh bg-purple-100">
        <Banner />
        <FeaturedProjectsSection />
      </div>
    </>
  );
}

export default App;
