import './App.css';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      {<Counter valorInicial = {100} incremento = {1500}/>}
    </div>
  );
}

export default App;
