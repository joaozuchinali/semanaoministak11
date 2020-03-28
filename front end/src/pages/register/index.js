import React, {useState} from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function Register(){
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');

    const history = useHistory();


    async function HandleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try{
            const response = await api.post('ongs',data);
        alert(`Seu id de acesso: ${response.data.id}`);
        history.push('/')
        }
        catch{
            alert(`erro`);
        }
        
    }
    return (
        <div className="register-container">
            <div class="container">
                <section>
                    <img src={logoImg} alt="be the hero"></img>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro e ajude pessoas a encontrarem os casos de sua ONG.</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>Já tenho cadastro
                     </Link>
                </section>
                <form onSubmit={HandleRegister}>
                    <input placeholder="nome da sua ONG" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
                    <div class='input-group'>
                        <input placeholder="cidade" value={city} onChange={e => setCity(e.target.value)}/>
                        <input placeholder="uf" value={uf} style={{width:80}} onChange={e => setUf(e.target.value)}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}