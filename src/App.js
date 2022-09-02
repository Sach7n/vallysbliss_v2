import logo from './logo.svg';
import './App.css';
import Home from"./components/Home"
import Work from"./components/Work"
import About from"./components/About"


import MainNavigation from './components/Navigation/MainNavigation';
function App() {
  return (
    <div className="App">
      <MainNavigation/>
      <Home/>
      <Work/>
      <About/>

      </div>
  );
}

export default App;
