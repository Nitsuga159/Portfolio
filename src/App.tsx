import './App.css';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import { useEffect, useState } from 'react';
import Block from './components/Block/Block';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

type SCROLL_TYPES = "aboutMe" | "projects" | "technologies" | "contact";

function App() {
  const [scrolls, setScrolls] = useState({
    aboutMe: false,
    projects: false,
    technologies: false,
    contact: false
  });
  const [scrollTop, setScrollTop] = useState(window.scrollY);



  useEffect(() => {
    let isAllTrue = true;
    for (let key in scrolls)
      if (!scrolls[key as SCROLL_TYPES]) isAllTrue = false;

    if (isAllTrue) return console.log("terminó");

    const cb = () => setScrollTop(window.scrollY);

    window.addEventListener("scroll", cb)

    return () => window.removeEventListener("scroll", cb)
  }, [scrolls]);

  useEffect(() => {

  }, [scrollTop]);

  return (
    <>
      <Navbar language={"english"} />
      <main>
        <Home />
        <Block
          scrollTop={scrollTop}
          setScrolls={setScrolls}
          title={"ABOUT ME"}
          property="aboutMe"
        />
        <AboutMe scrollAboutMe={scrolls.aboutMe} />
        <Block
          scrollTop={scrollTop}
          setScrolls={setScrolls}
          title={"PROJECTS"}
          property="projects"
        />
        <Projects />
        <Block
          scrollTop={scrollTop}
          setScrolls={setScrolls}
          title={"TECHNOLOGIES"}
          property="technologies"
        />
        <Skills scrollTechnologies={scrolls.technologies} />
        <Block
          scrollTop={scrollTop}
          setScrolls={setScrolls}
          title={"CONTACT"}
          property="contact"
        />
        <Contact scrollContact={scrolls.contact} />
      </main>
    </>
  );
}

export default App;
