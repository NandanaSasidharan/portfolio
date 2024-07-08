//import logo from './logo.svg';
import './App.css';
import Admin from './Components/Admin ';
import Connect from './Components/Connect';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Me from './Components/Me';

import Project from './Components/Project';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
    <header> <Header/></header>
     <section>
     
      <Admin/>
      <Connect/>
      <Skills/>
      <Project/>
      <Me/>
     </section>
     <Footer/> 
    </div>
  );
}

export default App;
