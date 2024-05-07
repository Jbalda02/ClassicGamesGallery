import LandMineIcon from './Assets/land-mines.svg' ;
import TetrisIcon from './Assets/tetris-svgrepo-com.svg';
import PaperRockScissorsIcon from './Assets/rock-paper.svg';
import WordleIcon from './Assets/letter-uppercase-square-w-svgrepo-com.svg';
import SudokuIcon from "./Assets/sudoku-svgrepo-com.svg";
import SpaceInvIcon from './Assets/game-svgrepo-com.svg';
import {Link} from "react-router-dom";


function Gallery() {
    return (
        <div className='d-flex flex-column'>
            <div className="d-flex justify-content-center mb-4 font-italic pixelify-sans-title ">Gallery</div>
            <div className='d-flex justify-content-center mb-4 font-italic pixelify-sans-title '> Para probar un juego haga click en el Icono</div>
            <div className="container">
                <div className="row justify-content-center">
                    <Link to="/LandMineGame" className="col-sm" ><img src={LandMineIcon} alt="Imagen Icono Buscaminas" className="w-100 p-3"/></Link>
                    <Link to="/TetrisGame" className="col-sm"><img src={TetrisIcon} alt="Imagen Icono Tetis"className="w-100 p-3" /></Link>
                    <Link to="/PaperRockScissorsGame" className="col-sm"><img src={PaperRockScissorsIcon} alt="Imagen Icono Piedra Papel  Tijeras" className="w-100 p-3" /></Link>
                </div>
                <div className="row justify-content-center">
                    <Link to="/WordleGame" className="col-sm"><img src={WordleIcon} alt="Imagen Icono Wordle" className=" w-100 p-3" /></Link>
                    <Link to="/SudokuGame" className="col-sm"><img src={SudokuIcon} alt="Imagen Icono Sudoku" className="w-100 p-3" /></Link>
                    <Link to="/SpaceInvadersGame" className="col-sm"><img src={SpaceInvIcon} alt="Imagen Icono Space Invaders" className="w-100 pl-5" /></Link>
                </div>
            </div>

        </div>
    );
}

export default Gallery