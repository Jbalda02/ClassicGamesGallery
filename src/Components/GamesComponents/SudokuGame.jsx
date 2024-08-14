import React from 'react';
import { useNavigate } from 'react-router-dom';
import SvgLogo from "./../Assets/sudoku-svgrepo-com.svg";

function SudokuGame() {
    const navigate = useNavigate();
    const urlGame = "https://sudoku.com/es/facil/";
    const handleButtonClick = () => {
        window.location.href = urlGame;
    };

    return (
        <div>
            <div className="d-flex align-items-center flex-column pd-10">
                <h1 className="pixelify-sans-title text-center">Sudoku</h1>
                <img src={SvgLogo} className="w-25 h-25" alt="Sudoku Logo"></img>
                <h2 className="pixelify-sans-title-2">Como Jugar</h2>
                <ol className="oswald-text">
                    <li>El objetivo es rellenar todos los numeros de la cuadrilla</li>
                    <li>Puedes utilizar numeros del 1 al 9</li>
                    <li>No se pueden repetir Numeros ni en las mismas filas, columnas o cuadros</li>
                    <li>Recomendacion no adivinar</li>
                    <li>Realizar Procesos de eliminacion</li>
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

export default SudokuGame;