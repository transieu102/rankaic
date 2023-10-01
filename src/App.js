import logo from './logo.svg';
import './App.css';
import QueryScreen from './components/QueryScreen/QueryScreen';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
function App() {
  return (
   <>
   <div className='mainContainer'>
      <QueryScreen/>
      <ScoreBoard/>
   </div>
   </>
  );
}

export default App;
