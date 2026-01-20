import React from 'react';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import About from './sections/About';
import Album from './sections/Album';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Programs from './sections/Programs';
import Skills from './sections/Skills';
import Leadership from './sections/Leadership';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <About />
        <Album />
        <Experience />
        <Projects />
        <Programs />
        <Skills />
        <Leadership />
        <Contact />
      </main>
    </div>
  );
}
