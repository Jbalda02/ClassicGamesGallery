import React from 'react';
import { useNavigate } from 'react-router-dom';
import SvgLogo from "./../Assets/land-mines.svg";

function LandMineGame() {
    const navigate = useNavigate();
    const urlGame = "https://www.solitar.io/buscaminas";
    const handleButtonClick = () => {
        window.location.href = urlGame;
    };

    return (
        <div>
            <div className="d-flex align-items-center flex-column pd-10">
                <h1 className="pixelify-sans-title text-center">Buscaminas</h1>
                <img src={SvgLogo} className="w-25 h-25" alt="Sudoku Logo"></img>
                <h2 className="pixelify-sans-title-2">Como Jugar</h2>
                <ol className="oswald-text">
                    <li>En la cuadrilla se encuentran bombas y el obejetivo es desactivarlas sin estallarlas </li>
                    <li>Para averiguar donde hay una bomba cada casilla tiene un numero que indica cuantas bombas hay en los cuadros adyacentes</li>
                    <li>Con click derecho desactiva la casilla con el izquierdo revisa el numero de las casillas cercanas</li>

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
export default LandMineGame;