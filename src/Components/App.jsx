// Libraries
import React from "react";
// Components
import Header from "./Header";
import Gallery from "./Gallery";
//Routing
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TetrisGame from "./GamesComponents/TetrisGame";
import LandMineGame from "./GamesComponents/LandMineGame";
import RockPaperScissorsGame from "./GamesComponents/RockPaperScissorsGame";
import WordleGame from "./GamesComponents/WordleGame";
import SudokuGame from "./GamesComponents/SudokuGame";
import SpaceInvadersGame from "./GamesComponents/SpaceInvadersGame";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Gallery/>}/>
                <Route path={"/TetrisGame"} element={<TetrisGame />} />
                <Route path={"/LandMine"} element={<LandMineGame />} />
                <Route path={"/PaperRockScissorsGame"} element={<RockPaperScissorsGame />} />
                <Route path={"/WordleGame"} element={<WordleGame />} />
                <Route path={"/SudokuGame"} element={<SudokuGame />} />
                <Route path={"/SpaceInvaders"} element={<SpaceInvadersGame />} />
            </Routes>
        </BrowserRouter>
    )
        ;
}

export default App