import './App.css';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      {<Counter valorInicial = {1} incremento = {1}/>}
    </div>
  );
}

export default App;
