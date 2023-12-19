import './style.css';
import { useRef, useContext } from 'react';
import { InfosContext } from '../../contexts/InfosContext';

const Formulario = () => {

  const refData = useRef<HTMLInputElement>(null!);
  const refCategoria = useRef<HTMLSelectElement>(null!);
  const refTitulo = useRef<HTMLInputElement>(null!);
  const refValor = useRef<HTMLInputElement>(null!);

  const {modificaInfos} = useContext(InfosContext);

  function enviaDados(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    let dataLista = refData.current.value.split('-');
    let dataFormatada: string = `${dataLista[2]}/${dataLista[1]}/${dataLista[0]}`;

    modificaInfos(dataFormatada, refCategoria.current.value, refTitulo.current.value, Number(refValor.current.value));

    refData.current.value = '';
    refCategoria.current.value = '';
    refTitulo.current.value = '';
    refValor.current.value = '';
  }

  return (
      <div className='selects'>
        <div className='selects-geral'>
          <form>
            <div className='selects-opcao'>
              <div><p>Data</p></div>
              <div><input type='date' ref={refData}></input></div>
            </div>

            <div className='selects-opcao'>
              <div><p>Categoria</p></div>
              <div>
                <select ref={refCategoria}>
                  <option value='Salário'>Salário</option>
                  <option value='Aluguel'>Aluguel</option>
                  <option value='Alimentação'>Alimentação</option>
                </select>
              </div>
            </div>
            
            <div className='selects-opcao'>
              <div><p>Título</p></div>
              <div><input type='text' ref={refTitulo}></input></div>
            </div>

            <div className='selects-opcao'>
              <div><p>Valor</p></div>
              <div><input type='number' ref={refValor}></input></div>
            </div>

            <div className='selects-opcao botao-adicionar'>
              <div className='selects-botao'><button type='submit' onClick={enviaDados}>Adicionar</button></div>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Formulario