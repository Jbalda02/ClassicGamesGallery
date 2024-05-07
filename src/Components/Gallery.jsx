import LandMineIcon from './Assets/land-mines.svg' ;
import TetrisIcon from './Assets/tetris-svgrepo-com.svg';
import PaperRockScissorsIcon from './Assets/rock-paper.svg';
import WordleIcon from './Assets/letter-uppercase-square-w-svgrepo-com.svg';
import SudokuIcon from "./Assets/sudoku-svgrepo-com.svg";
import SpaceInvIcon from './Assets/game-svgrepo-com.svg';
import {Link} from "react-router-dom";


function Gallery() {
    return (
        <div>
            <div className="d-flex justify-content-center mb-4 font-italic pixelify-sans-title ">Gallery</div>
            <div className='d-flex justify-content-center mb-4 font-italic pixelify-sans-title'> Para probar un juego
                Haga click en el Icono
            </div>
            <div className="container">
                <div className="row">
                    <Link to="/LandMineGame" className="col-sm" ><img src={LandMineIcon} alt="Imagen Icono Buscaminas" className="w-25 p-3"  /></Link>
                    <Link to="/TetrisGame" className="col-sm w-25 p-3"><img src={TetrisIcon} alt="Imagen Icono Tetis"className="w-25 p-3" /></Link>
                    <Link to="/PaperRockScissorsGame" className="col-sm w-25 p-3"><img src={PaperRockScissorsIcon} alt="Imagen Icono Piedra Papel  Tijeras" className="w-25 p-3" /></Link>
                </div>
                <div className="row">
                    <Link to="/WordleGame" className="col-sm w-25 p-3"><img src={WordleIcon} alt="Imagen Icono Wordle" className=" w-25 p-3" /></Link>
                    <Link to="/SudokuGame" className="col-sm w-25 p-3"><img src={SudokuIcon} alt="Imagen Icono Sudoku" className="w-25 p-3" /></Link>
                    <Link to="/SpaceInvadersGame" className="col-sm w-25 p-3"><img src={SpaceInvIcon} alt="Imagen Icono Space Invaders" className="w-25 p-3" /></Link>
                </div>
            </div>

        </div>
    );
}

export default Gallery