import LandMineIcon from './Assets/land-mines.svg' ;
import TetrisIcon from './Assets/tetris-svgrepo-com.svg';
import PaperRockScissorsIcon from './Assets/rock-paper.svg';
import WordleIcon from './Assets/letter-uppercase-square-w-svgrepo-com.svg';
import SudokuIcon from "./Assets/sudoku-svgrepo-com.svg";
import SpaceInvIcon from './Assets/game-svgrepo-com.svg'
function Gallery(){
    return(
        <div>
      <div className="d-flex justify-content-center mb-4 font-italic pixelify-sans-title ">Gallery</div>
            <div className = 'd-flex justify-content-center mb-4 font-italic pixelify-sans-title'> Para probar un juego Haga click en el Icono</div>
        <div className="container">
            <div className="row">
                <img src={LandMineIcon} alt="Imagen Icono Buscaminas" className="col-sm w-25 p-3" />
                <img src={TetrisIcon} alt="Imagen Icono Tetis" className="col-sm w-25 p-3"/>
                <img src={PaperRockScissorsIcon} alt="Imagen Icono Piedra Papel Tijeras" className="col-sm w-25 p-3"/>
            </div>
            <div className="row">
                <img src={WordleIcon} alt="Imagen Icono Wordle" className="col-sm w-25 p-3"/>
                <img src={SudokuIcon} alt="Imagen Icono Sudoku" className="col-sm w-25 p-3"/>
                <img src={SpaceInvIcon} alt="Imagen Icono Space Invaders" className="col-sm w-25 p-3"/>
            </div>
        </div>
        </div>
    );
}

export default Gallery