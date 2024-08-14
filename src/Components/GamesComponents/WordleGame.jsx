import React from 'react';
import { useNavigate } from 'react-router-dom';
import SvgLogo from "./../Assets/letter-uppercase-square-w-svgrepo-com.svg";

function WordleGame() {
    const navigate = useNavigate();
    const urlGame = "https://www.nytimes.com/games/wordle/index.html";
    const handleButtonClick = () => {
        window.location.href = urlGame;
    };

    return (
        <div>
            <div className="d-flex align-items-center flex-column pd-10">
                <h1 className="pixelify-sans-title text-center">Wordle</h1>
                <img src={SvgLogo} className="w-25 h-25" alt="Sudoku Logo"></img>
                <h2 className="pixelify-sans-title-2">Como Jugar</h2>
                <ol className="oswald-text">
                    <li>Juego de palabras</li>
                    <li>El objetivo es adivinar la palabra secreta</li>
                    <li>Tienes 5 intentos</li>
                    <li>Cuando ingresas un intento cada letra se pondra de color</li>
                    <li>El verde indica posicion y letra correcta</li>
                    <li>El amarillo indica que la letra es correcta pero el posicionamiento es incorrecto</li>
                    <li>El gris indica que esa letra no se encuentra</li>
                </ol>
            </div>
            <div className="Tetris-game-frame d-flex align-items-center flex-column pd-10">
                <button onClick={handleButtonClick}>
                    Start Game
                </button>
            </div>
        </div>
    );
}
export default WordleGame;