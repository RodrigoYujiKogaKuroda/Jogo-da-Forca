import React from "react";
import GlobalStyle from './theme/globalStyle'

import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chute"
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

export default function App() {

    const forcas = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
    const [desativado, setDesativado] = React.useState(true);
    const [erros, setErros] = React.useState(0);
    const [chute, setChute] = React.useState("");
    const [corTexto, setCorTexto] = React.useState("black");
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const [alfabetoSelecionado, setAlfabetoSelecionado] = React.useState([]);
    const [palavra, setPalavra] = React.useState("");
    const [palavraExibida, setPalavraExibida] = React.useState([]);
    const [palavraComparada, setPalavraComparada] = React.useState("");

    function fimDeJogo(ganhou) {
        setDesativado(true);
        if (ganhou === true) {
            setCorTexto("green");
        } else {
            setCorTexto("red");
            setPalavraExibida(palavra);
        }
    }

    return (
        <>
            <GlobalStyle />
            <Jogo forcas={forcas} setDesativado={setDesativado} erros={erros} setErros={setErros} setChute={setChute} corTexto={corTexto} setCorTexto={setCorTexto} setAlfabetoSelecionado={setAlfabetoSelecionado} setPalavra={setPalavra} palavraExibida={palavraExibida} setPalavraExibida={setPalavraExibida} setPalavraComparada={setPalavraComparada} />
            <Letras desativado={desativado} erros={erros} setErros={setErros} alfabeto={alfabeto} alfabetoSelecionado={alfabetoSelecionado} setAlfabetoSelecionado={setAlfabetoSelecionado} palavra={palavra} palavraExibida={palavraExibida} setPalavraExibida={setPalavraExibida} palavraComparada={palavraComparada} fimDeJogo={fimDeJogo} />
            <Chute desativado={desativado} setErros={setErros} chute={chute} setChute={setChute} palavra={palavra} setPalavraExibida={setPalavraExibida} fimDeJogo={fimDeJogo} />
        </>
    );
}