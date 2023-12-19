import './App.css';
import Menu from './componentes/Menu';
import Formulario from './componentes/Formulario';
import Painel from './componentes/Paneil';

function App() {
  return (
    <>
      <div>
        <div className='header'>
          <h1>Sistema Financeiro</h1>
        </div>
        <Menu/>
        <Formulario/>
        <Painel/>
      </div>
    </>
  )
}

export default App
