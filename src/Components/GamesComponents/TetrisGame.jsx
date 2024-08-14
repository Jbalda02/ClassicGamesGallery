import React from "react";
import { useNavigate } from "react-router-dom";
import SvgLogo from "./../Assets/tetris-svgrepo-com.svg";
function TetrisGame() {
  const navigate = useNavigate();
  const urlGame = "https://tetris.com/play-tetris";
  const handleButtonClick = () => {
    window.location.href = urlGame;
  };
  return (
    <div>
      <div className="d-flex align-items-center flex-column pd-10">
        <h1 className="pixelify-sans-title text-center"> Tetris</h1>
        <img src={SvgLogo} className="w-25 h-25"></img>
        <h2 className="pixelify-sans-title-2">Como Jugar </h2>
        <ol className="oswald-text">
          <li>Los bloques caen con el tiempo </li>
          <li>Encaja los bloques sin que te quedes sin espacio </li>
          <li>Puedes girar los bloques con las flechas del teclado </li>
          <li>Completa filas para conseguir mas espacio </li>
          <li> Cuidado las piezas cada vez caen mas rapido! </li>
        </ol>
      </div>
      <div className="Tetris-game-frame d-flex align-items-center flex-column pd-10">
        <button onClick={handleButtonClick}>Start Game</button>{" "}
      </div>
    </div>
  );
}
export default TetrisGame;
