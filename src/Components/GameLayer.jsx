import Header from "./Header";
import Footer from "./Footer";

function GameLayer(){
    return(
        <div>
            <Header></Header>
            <GameWindow></GameWindow>
            <Footer></Footer>
        </div>
    );
}
export default GameLayer();