import './style.css';
import { useContext } from 'react';
import { InfosContext } from '../../contexts/InfosContext';

const Painel = () => {
  const { infos } = useContext(InfosContext);

  return (
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
            {infos.map((element, index) => (
              <tr key={index}>
                <td>{element.data}</td>
                <td style={{color: element.categoria === "Salário"? "Green": element.categoria === "Aluguel"? "Red": element.categoria === "Alimentação"? "Blue": "Black"}}>{element.categoria}</td>
                <td>{element.titulo}</td>
                <td style={{color: element.categoria === "Salário"? "Green": element.categoria === "Aluguel" || "Alimentação"? "Red": "Black"}}>R$ {element.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Painel;