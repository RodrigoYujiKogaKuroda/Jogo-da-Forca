import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyle'

import palavras from "./palavras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

function comparador() { 
	return Math.random() - 0.5; 
}

export default function App() {

    const [desativado, setDesativado] = React.useState(true);
    const [forca, setForca] = React.useState(forca0);
    const [chute, setChute] = React.useState("");
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const palavra = palavras.sort(comparador)[0];

    function escolherLetra(letra) {
        console.log(letra);
    }

    return (
        <>
            <GlobalStyle />
            <Forca>
                <img src={forca} alt="forca" data-identifier="game-image" />
                <MenuLado>
                    <button data-identifier="choose-word">Escolher palavra</button>
                    <p>{palavra}</p>
                </MenuLado>
            </Forca>
            <Letras>
                {alfabeto.map( letra => 
                    <button onClick={() => escolherLetra(letra)} disabled={desativado} data-identifier="letter">{letra}</button>
                )}
            </Letras>
            <Formulario>
                    <Campo>
                        <label htmlFor="chute">Já sei a palavra!</label>
                        <input
                        type="text"
                        id="chute"
                        value={chute}
                        onChange={(e) => setChute(e.target.value)}
                        data-identifier="type-guess"
                        />
                    </Campo>
                    <button disabled={desativado} data-identifier="guess-button">Chutar</button>
            </Formulario>
        </>
    );
}

const Forca = styled.div`
    display: flex;
    justify-content: space-between;
`;

const MenuLado = styled.div`
    display: flex;
    flex-direction: column;
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
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }

    p {
        font-size: 40px;
        font-weight: bold;
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
        width: 60px;
        height: 60px;
        margin: 15px 0;
        font-size: 24px;
        color: #39739d;
        border: 2px solid #39739d;
        border-radius: 5px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }

    button:disabled {
        background-color: #9faab5;
        color: #79818a;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
`;

const Formulario = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;

    button {
        background-color: #e1ecf4;
        width: 106.5px;
        height: 57px;
        margin-left: 20px;
        font-weight: bold;
        font-size: 24px;
        color: #39739d;
        border: 2px solid #39739d;
        border-radius: 5px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

const Campo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    label {
        margin-right: 20px;
        font-size: 24px;
    }

    input[type=text] {
		width: 480px;
		height: 48px;
        padding: 0 18px;
		border: 2px solid #b8b8b8;
        border-radius: 10px;
		font-size: 24px
    }
`;