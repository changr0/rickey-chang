import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App() {
    return (
      <div className="App">
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
        </main>
      </div>
    );
}

export default App;