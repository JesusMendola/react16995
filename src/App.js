import './App.css';
import Menu from './componentes/Menu/';
import ItemListContainer from './componentes/ItemListContainer/'


function App() {
  return (
    <div className="App">
      <Menu title={'MENU'}  />
      <ItemListContainer/>
    </div>
  );
}

export default App;
