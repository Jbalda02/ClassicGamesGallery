import LandMineIcon from './Assets/land-mines.svg' ;
import TetrisIcon from './Assets/tetris-svgrepo-com.svg';
import PaperRockScissorsIcon from './Assets/rock-paper.svg';
import WordleIcon from './Assets/letter-uppercase-square-w-svgrepo-com.svg';
import SudokuIcon from "./Assets/sudoku-svgrepo-com.svg";
import SpaceInvIcon from './Assets/game-svgrepo-com.svg';
import {Link, Routes} from "react-router-dom";
import GameCanvas from "./GameCanvas";

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
                <Route path={} element={<GameCanvas game={<TetrisGame />} />} />
                <Route path={} element={<GameCanvas game={<LandMineGame />} />} />
                <Route path={} element={<GameCanvas game={<RockPaperScissorsGame />} />} />
                <Route path={} element={<GameCanvas game={<WordleGame />} />} />
                <Route path={} element={<GameCanvas game={<SudokuGame />} />} />
                <Route path={} element={<GameCanvas game={<SpaceInvadersGame />} />} />
            </Routes>
        </div>
    );
}

export default Gallery