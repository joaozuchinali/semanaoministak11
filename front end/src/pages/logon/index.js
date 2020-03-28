import React, {useState} from 'react';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function HandleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('session', {id});
            // response.data.name;
        // history.push('/');
        localStorage.setItem('ongId', id)
        localStorage.setItem('ongName', response.data.name);
        history.push('/profile');
        }
        catch{
            alert(`erro`);
        }
    }
    return(
      <div class="logon-container">
          <section class="form">
          <img src={logoImg} alt="Be the heroe" />
          <form onSubmit={HandleLogin}>
              <h1>Faça seu logn</h1>

              <input type="text" value={id} onChange={e => setId(e.target.value)} placeholder="sua id"></input>
              <button className="button" type="submit">Entrar</button>
              <Link to="/register" className="back-link">
                  <FiLogIn size={16} color="#E02041"/>Não tenho cadastro
              </Link>
          </form>
          </section>
          
          
          <img src={heroesImg} alt="heroes" />
      </div>
    );
}