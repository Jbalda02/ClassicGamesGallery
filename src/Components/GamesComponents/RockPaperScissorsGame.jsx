import React from 'react';
import { useNavigate } from 'react-router-dom';
import SvgLogo from "./../Assets/rock-paper.svg";

function RockPaperScisorrsGame() {
    const navigate = useNavigate();
    const urlGame = "https://www.rpsgame.org";
    const handleButtonClick = () => {
        window.location.href = urlGame;
    };

    return (
        <div>
            <div className="d-flex align-items-center flex-column pd-10">
                <h1 className="pixelify-sans-title text-center">Rock Paper Scisors</h1>
                <img src={SvgLogo} className="w-25 h-25" alt="Sudoku Logo"></img>
                <h2 className="pixelify-sans-title-2">Como Jugar</h2>
                <ol className="oswald-text">
                    <li>Es un juego multijugador entre 2</li>
                    <li>Elige Piedra Papel o tijieras</li>
                    <li>Se compara el resultado con el del oponente</li>
                    <li>Las tijeras cortan papel, la piedra rompe las tijeras y el papel recubre a la piedra</li>
                    <li>En caso de empate repetir</li>
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
export default RockPaperScisorrsGame;