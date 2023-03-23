import './App.css';
import WelcomeAnimation from './components/WelcomeAnimation';
import Home from './components/Home';

function App() {
  return (
    <>
      <WelcomeAnimation>
        <Home />
      </WelcomeAnimation>
    </>
  );
}

export default App;
