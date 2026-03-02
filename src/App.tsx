import Hero from "./pages/personal/Hero";
import About from "./pages/personal/about";
import Portofolio from "./pages/personal/portofolio";
import Skill from "./pages/personal/skill";
import Testimoni from "./pages/personal/testimoni";
import Experience from "./pages/personal/experience";
import Cform from "./pages/personal/cform";
import DetailPorto from "./pages/personal/detailPorto";
import Layout from "./pages/CompanyProfile/Layout";
import Homepage from "./pages/CompanyProfile/HomeB";
import About2 from "./pages/CompanyProfile/About";
import Services from "./pages/CompanyProfile/Service";
import Teams from "./pages/CompanyProfile/Team";
import Blog from "./pages/CompanyProfile/Blog";
import Nav from "./pages/personal/navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skill />
      <Portofolio />
      <Experience />
      <Testimoni />
      <Cform />
    </>
  );
}
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailPorto />} />
        <Route path="/company" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About2 />} />
          <Route path="services" element={<Services />} />
          <Route path="teams" element={<Teams />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
