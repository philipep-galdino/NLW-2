import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media.discordapp.net/attachments/724411849839345705/737730645698019488/unknown_7.png" alt="Philipe Galdino"/>
                <div>
                    <strong>Philipe Galdino</strong>
                    <span>Matemática</span>
                    </div>
            </header>
            <p>
                Profissional em calculos, apaixonado por números e tabelas avançadas.
                <br /> <br />
                Já mudou o número com calculos. Mostrou para o universo o como é possível calcular a terra plana quando dizem que ela é redonda, e fez mudanças em quase todas as normas da física com calculos extraordinários sobre o mundo moderno.
                </p>
                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
        </article>
    )
}

export default TeacherItem;