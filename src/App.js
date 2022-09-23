import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyle'

import palavras from "./palavras";
import forca0 from "./assets/forca0.png";

function comparador() { 
	return Math.random() - 0.5; 
}

export default function App() {

    const [desativado, setDesativado] = React.useState("");
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const palavra = palavras.sort(comparador)[0];

    function escolherLetra(letra) {
        console.log(letra);
    }

    return (
        <>
            <GlobalStyle />
            <Forca>
                <img src={forca0} alt="forca0" />
                <button>Escolher palavra</button>
            </Forca>
            <Letras>
                {alfabeto.map( letra => 
                    <button onClick={() => escolherLetra(letra)}>{letra}</button>
                )}
            </Letras>
            <Formulario>
                    <p>Já sei a palavra!</p>
            </Formulario>
        </>
    );
}

const Forca = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        color: #ffffff;
        background-color: #27ae60;
        width: 294px;
        height: 72px;
        margin-top: 45px;
        font-size: 24px;
        color: #ffffff;
        border: none;
        border-radius: 5px;
    }
`;

const Letras = styled.div`
    width: 100%;
    margin-top: 50px;
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto;

    button {
        background-color: #e1ecf4;
        font-family: 'Roboto', sans-serif;
        width: 60px;
        height: 60px;
        margin: 15px 0;
        font-size: 24px;
        color: #39739d;
        border: 2px solid #39739d;
        border-radius: 5px;
    }
`;

const Formulario = styled.form`
    margin-top: 50px;
    display: flex;
    justify-content: center;

    p {
        font-size: 24px;
    }
`;