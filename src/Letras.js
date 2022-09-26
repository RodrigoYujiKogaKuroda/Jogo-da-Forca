import React from "react";
import styled from 'styled-components';

export default function Letras(props) {

    const desativado = props.desativado;
    const erros = props.erros;
    const setErros = props.setErros;
    const alfabeto = props.alfabeto;
    const alfabetoSelecionado = props.alfabetoSelecionado;
    const setAlfabetoSelecionado = props.setAlfabetoSelecionado;
    const palavra = props.palavra;
    const palavraExibida = props.palavraExibida;
    const setPalavraExibida = props.setPalavraExibida;
    const palavraComparada = props.palavraComparada;
    const fimDeJogo = props.fimDeJogo;

    function foiEscolhida(letra) {
        for (let i = 0; i < alfabetoSelecionado.length; i++) {
            if (letra === alfabetoSelecionado[i]) {
                return true;
            }
        }
        return false;
    }

    function escolherLetra(letra) {
        let temLetra = false;
        let exibida = [...palavraExibida];
        setAlfabetoSelecionado([...alfabetoSelecionado, letra]);
        for (let i = 0; i < palavraComparada.length; i++) {
            if (palavraComparada[i] === letra) {
                temLetra = true;
                exibida[i] = palavra[i];
            }
        }
        if (temLetra === true) {
            console.log(exibida.join(""));
            setPalavraExibida(exibida);
            if (exibida.join("") === palavraComparada) {
                fimDeJogo(true);
            }
        } else {
            let errado = erros + 1
            setErros(errado);
            if (errado === 6) {
                fimDeJogo(false);
            }
        }
    }

    return (
        <>
        <Teclado>
            {alfabeto.map( letra => 
                <button key={letra} onClick={() => escolherLetra(letra)} disabled={foiEscolhida(letra) || desativado ? true : false} data-identifier="letter">{letra}</button>
            )}
        </Teclado>
        </>
    );

}

const Teclado = styled.div`
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
        cursor: default;
    }
`;