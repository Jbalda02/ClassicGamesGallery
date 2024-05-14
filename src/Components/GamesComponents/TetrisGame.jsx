import  SvgLogo  from "./../Assets/tetris-svgrepo-com.svg";
function TetrisGame (){
    return(<div>
            <div className="d-flex align-items-center flex-column pd-10">
            <h1 className="pixelify-sans-title text-center"> Tetris</h1>
            <img src={SvgLogo} className="w-25 h-25"></img>
            <h2 className="pixelify-sans-title-2">Como Jugar             </h2>
            <ol className="oswald-text">
                <li>Los bloques caen con el tiempo                       </li> 
                <li>Encaja los bloques sin que te quedes sin espacio     </li>
                <li>Puedes girar los bloques con las flechas del teclado </li>
                <li>Completa filas para conseguir mas espacio            </li>
                <li> Cuidado las piezas cada vez caen mas rapido!        </li>
            </ol>
          </div>
      <div className="Tetris-game-frame" >
            <iframe className="Tetris-game" id="embededGame" src="https://idev.games/embed/tetris-t-crisis" seamless='no' >Browser not compatible.</iframe>      
      </div>
      </div>)
}
export default TetrisGame;