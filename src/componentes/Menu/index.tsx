import './style.css';
import { useContext } from 'react';
import { InfosContext } from '../../contexts/InfosContext';

const Menu = () => {

  const { valores } = useContext(InfosContext);

  return (
      <div className='valores'>
        <div className='geral-header'>
          <div className='menu-header'>
            <div><p>{'<-'} &nbsp; Cont &nbsp; {'->'}</p></div>
          </div>
          <div className='valores-header'>
            <p style={{color: "gray", fontWeight: "bold"}}>Receitas</p>
            <p style={{fontWeight: "bold"}}>R$ {valores.receita}</p>
          </div>
          <div className='valores-header'>
            <p style={{color: "gray", fontWeight: "bold"}}>Despesas</p>
            <p  style={{fontWeight: "bold"}}>R$ {valores.despesa}</p>
          </div>
          <div className='valores-header'>
            <p style={{color: "gray", fontWeight: "bold"}}>Balanço</p>
            <p style={{color: valores.balanco > 0? "Green": valores.balanco < 0? "Red": "Black", fontWeight: "bold"}}>R$ {valores.balanco}</p>
          </div>
        </div>
      </div>
    )
}

export default Menu