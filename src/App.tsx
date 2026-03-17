import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";

const Home = lazy(() => import("@pages/home"));
const AboutMe = lazy(() => import("@pages/about-me"));
const Skills = lazy(() => import("@pages/skills"));
const Projects = lazy(() => import("@pages/projects"));
const Blog = lazy(() => import("@pages/blog"));
const Contact = lazy(() => import("@pages/contact"));

function App() {
  return (
    <Suspense fallback={<div className="loading">Đang tải...</div>}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

export default App;
