import React from "react";
import styled from 'styled-components';
import palavras from "./palavras";

export default function Jogo(props) {

    const forcas = props.forcas;
    const setDesativado = props.setDesativado;
    const erros = props.erros;
    const setErros = props.setErros;
    const setChute = props.setChute;
    const corTexto = props.corTexto;
    const setCorTexto = props.setCorTexto;
    const setAlfabetoSelecionado = props.setAlfabetoSelecionado;
    const setPalavra = props.setPalavra
    const palavraExibida = props.palavraExibida;
    const setPalavraExibida = props.setPalavraExibida
    const setPalavraComparada = props.setPalavraComparada

    function comparador() { 
        return Math.random() - 0.5; 
    }

    function criarPalavra(sorteada) {
        let escondida = [];
        for (let i = 0; i < sorteada.length; i++) {
            escondida.push(" _ ");
        }
        return escondida;
    }

    function escolherPalavra() {
        setDesativado(false);
        setErros(0);
        setChute("");
        setCorTexto("black");
        setAlfabetoSelecionado([]);
        let sorteada = palavras.sort(comparador)[0];
        setPalavra(sorteada);
        setPalavraExibida(criarPalavra(sorteada));
        setPalavraComparada(sorteada.normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
    }

    return (
        <>
        <Forca>
            <img src={forcas[erros]} alt="forca" data-identifier="game-image" />
            <MenuLado>
                <button onClick={() => escolherPalavra()} data-identifier="choose-word">Escolher palavra</button>
                <Resposta cor={corTexto}>{palavraExibida}</Resposta>
            </MenuLado>
        </Forca>
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

    button:disabled {
        cursor: default;
    }
`;

const Resposta = styled.p`
    color: ${props => props.cor};
    font-size: 40px;
    font-weight: bold;
`;