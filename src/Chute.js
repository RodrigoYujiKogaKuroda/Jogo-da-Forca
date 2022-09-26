import React from "react";
import styled from 'styled-components';

let Chute = function(props) {

    const {
        desativado,
        setErros,
        chute,
        setChute,
        palavra,
        setPalavraExibida,
        fimDeJogo
    } = props;
    const ultimoErro = 6;

    function adivinhar() {
        const adivinhado = chute.toLowerCase();
        if (adivinhado === palavra) {
            setPalavraExibida(palavra);
            fimDeJogo(true);
        } else if (adivinhado.length > 0) {
            setErros(ultimoErro);
            fimDeJogo(false);
        }
    }

    return (
        <>
        <Formulario>
            <Campo>
                <label htmlFor="chute">Já sei a palavra!</label>
                <input
                    type="text"
                    id="chute"
                    value={chute}
                    onChange={(e) => setChute(e.target.value)}
                    disabled={desativado}
                    data-identifier="type-guess"
                />
            </Campo>
            <button onClick={adivinhar} disabled={desativado} data-identifier="guess-button">Chutar</button>
        </Formulario>
        </>
    );

}

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

    button:disabled {
        cursor: default;
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

export default Chute;