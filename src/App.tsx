import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='header'>
          <h1>Sistema Financeiro</h1>
        </div>

        <div className='valores'>
          <div className='geral-header'>
            <div className='menu-header'>
              <div><p>{'<-'}</p></div>
              <div><p>Conteúdo</p></div>
              <div><p>{'->'}</p></div>
            </div>
            <div className='valores-header'>
              <p>Receitas</p>
              <p>R$ 2500</p>
            </div>
            <div className='valores-header'>
              <p>Despesas</p>
              <p>R$ 1500</p>
            </div>
            <div className='valores-header'>
              <p>Balanço</p>
              <p>R$ 1000</p>
            </div>
          </div>
        </div>

        <div className='selects'>
          <div className='selects-geral'>
            <div className='selects-opcao'>
              <div><p>Data</p></div>
              <div><input></input></div>
            </div>

            <div className='selects-opcao'>
              <div><p>Categoria</p></div>
              <div><input></input></div>
            </div>
            
            <div className='selects-opcao'>
              <div><p>Título</p></div>
              <div><input></input></div>
            </div>

            <div className='selects-opcao'>
              <div><p>Valor</p></div>
              <div><input></input></div>
            </div>

            <div className='selects-opcao'>
              {/* <div><p>adsasdas</p></div> */}
              <div className='selects-botao'><button>Adicionar</button></div>
            </div>
          </div>
        </div>

        <div className='infos'>
          <div className='infos-geral'>
            <table className='infos-tabela'>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Categoria</th>
                  <th>Título</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>07/03/2022</td>
                  <td><div>Salário</div></td> {/*Mexer nessa div para ela ficar estitilizada.*/}
                  <td>Salário</td>
                  <td>R$ 2500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
