import './App.css';
import WelcomeAnimation from './components/WelcomeAnimation';
import Home from './components/Home';
import Background from './components/Background';

function App() {
  return (
    <>
      <Background />
      <WelcomeAnimation>
        <Home />
      </WelcomeAnimation>
    </>
  );
}

export default App;
