import './App.css';
import Score from './components/score/Score';
import Summary from './components/summary/Summary';

//Fonts
import './assets/fonts/HankenGrotesk-VariableFont_wght.ttf';

function App() {
  return (
    <div className='App'>
      <Score />
      <Summary />
    </div>
  );
}

export default App;
