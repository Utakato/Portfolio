import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
