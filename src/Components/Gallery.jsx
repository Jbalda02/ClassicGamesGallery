import LandMineIcon from './Assets/land-mines.svg' ;
import TetrisIcon from './Assets/tetris-svgrepo-com.svg';
import PaperRockScissorsIcon from './Assets/rock-paper.svg';
import WordleIcon from './Assets/letter-uppercase-square-w-svgrepo-com.svg';
import SudokuIcon from "./Assets/sudoku-svgrepo-com.svg";
import SpaceInvIcon from './Assets/game-svgrepo-com.svg';
import {Link, Routes} from "react-router-dom";

import  SpaceInvadersGame from './GamesComponents/SpaceInvadersGame';
import  WordleGame from './GamesComponents/WordleGame';
import  TetrisGame from './GamesComponents/TetrisGame';
import  LandMineGame from './GamesComponents/LandMineGame';
import  SudokuGame from './GamesComponents/SudokuGame';
import  RockPaperScissorsGame from './GamesComponents/RockPaperScissorsGame';


function Gallery() {
    return (
        <div>
            <div className="d-flex justify-content-center mb-4 font-italic pixelify-sans-title ">Gallery</div>
            <div className='d-flex justify-content-center mb-4 font-italic pixelify-sans-title'> Para probar un juego
                Haga click en el Icono
            </div>
            <div className="container">
                <div className="row">
                    <Link to="/LandMineGame" ><img src={LandMineIcon} alt="Imagen Icono Buscaminas" className="col-sm w-25 p-3"/></Link>
                    <Link to="/TetrisGame" ><img src={TetrisIcon} alt="Imagen Icono Tetis" className="col-sm w-25 p-3"/></Link>
                    <Link to="/PaperRockScissorsGame" ><img src={PaperRockScissorsIcon} alt="Imagen Icono Piedra Papel Tijeras" className="col-sm w-25 p-3"/></Link>
                </div>
                <div className="row">
                    <Link to="/WordleGame" ><img src={WordleIcon} alt="Imagen Icono Wordle" className="col-sm w-25 p-3"/></Link>
                    <Link to="/SudokuGame" ><img src={SudokuIcon} alt="Imagen Icono Sudoku" className="col-sm w-25 p-3"/></Link>
                    <Link to="/SpaceInvadersGame" ><img src={SpaceInvIcon} alt="Imagen Icono Space Invaders" className="col-sm w-25 p-3"/></Link>
                </div>
            </div>
            <Routes>
                <Route path={} element={<TetrisGame />} />
                <Route path={} element={<LandMineGame />} />
                <Route path={} element={<RockPaperScissorsGame />} />
                <Route path={} element={<WordleGame />} />
                <Route path={} element={<SudokuGame />} />
                <Route path={} element={<SpaceInvadersGame />} />
            </Routes>
        </div>
    );
}

export default Gallery