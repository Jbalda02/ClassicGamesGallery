import React from 'react';
import { useNavigate } from 'react-router-dom';
import SvgLogo from "./../Assets/game-svgrepo-com.svg";

function SpaceInvadersGame() {
    const navigate = useNavigate();
    const urlGame = "https://freeinvaders.org";
    const handleButtonClick = () => {
        window.location.href = urlGame;
    };

    return (
        <div>
            <div className="d-flex align-items-center flex-column pd-10">
                <h1 className="pixelify-sans-title text-center">Space Invaders</h1>
                <img src={SvgLogo} className="w-25 h-25" alt="Sudoku Logo"></img>
                <h2 className="pixelify-sans-title-2">Como Jugar</h2>
                <ol className="oswald-text">
                    <li>El Juego es Infinito tu objetivo es sobrervivir la mayor cantidad de tiempo </li>
                    <li>Los invasores avanzan de poco en poco hacia la tierra</li>
                    <li>Disparales antes de que lleguen</li>
                    <li>Cuidado Los asteroides bloquean tu camino asegurate de quitarlos del medio</li>
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
export default SpaceInvadersGame;