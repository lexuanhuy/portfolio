import { Routes, Route } from "react-router";
import Home from "@pages/home";
import AboutMe from "@pages/about-me";
import Skills from "@pages/skills";
import Projects from "@pages/projects";
import Blog from "@pages/blog";
import Contact from "@pages/contact";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
