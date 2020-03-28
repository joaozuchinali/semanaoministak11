import React, {useEffect, useState} from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';


export default function Incident(){
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    async function HandleRegister(e){
        e.preventDefault();
        const data = {
            description,
            title,
            value,
        };
        console.log(data);
        try{
        
        await api.post('incidents', data, {
            headers:
            {
                Authorization:ongId,
            }
        })
        history.push('/profile');
        }
        catch{
            alert(`erro`);
        }
    }


    return(
        <div className="new-incident-container">
            <div class="container">
                <section>
                    <img src={logoImg} alt="be the hero"></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva seu caso detalhadamente.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>Voltar para home
                     </Link>
                </section>
                <form onSubmit={HandleRegister}>
                    <input
                     placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea 
                     placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/> 
                     <input
                     placeholder="valor em reais" value={value} onChange={e => setValue(e.target.value)}/>
                    <button className="button" type="submit" >Cadastrar</button>
                </form>
            </div>
        </div>
    );
}