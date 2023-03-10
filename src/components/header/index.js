import React from 'react';
import {AreaHeader} from './styled'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <AreaHeader>
      <div className='container'>
          <div className='logo'>
              <p>LOGO</p>
          </div>
          
        <nav>
          <ul>
            <li><a href='./'>HOME</a></li>
            <li><a href='/sobre'>SOBRE</a></li>
            <li><a href='/cep'>CEP</a></li>
            <li><Link to = '/sobre'>Sobre v2</Link></li>
            <li><Link to = '/'>Home v2</Link></li>
          </ul>
        </nav>
      </div>
     
      </AreaHeader>
    </div>
  )
};
export default Header;