import Header from "./Header";
import Footer from "./Footer";
import Display from "./DisplayComponets/Display";

function GameCanvas({ game }) {
    return(
        <GameCanvas>
            <Display />
            {game}
        </GameCanvas>
    );
}
export default GameCanvas();