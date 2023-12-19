import './style.css';
import { useContext } from 'react';
import { InfosContext } from '../../contexts/InfosContext';

const Painel = () => {
  const { infos } = useContext(InfosContext);

  const category = [
    {id: 1, title: 'Salário', isExpense: true, color: '#FFF', bg: '#444ddd'},
    {id: 2, title: 'Freelas', isExpense: true, color: '', bg: ''},
    {id: 3, title: 'Aluguel', isExpense: false, color: '', bg: ''},
    {id: 4, title: 'Cartão de Créditos', isExpense: false, color: '', bg: ''},
    {id: 5, title: 'Alimentação', isExpense: false, color: '', bg: ''},
  ];

  console.log(category[0].isExpense ? 'Green' : 'Black')

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
              <tr key={index+1}>
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