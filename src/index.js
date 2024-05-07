import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TetrisGame from "./Components/GamesComponents/TetrisGame";
import LandMineGame from "./Components/GamesComponents/LandMineGame";
import RockPaperScissorsGame from "./Components/GamesComponents/RockPaperScissorsGame";
import WordleGame from "./Components/GamesComponents/WordleGame";
import SudokuGame from "./Components/GamesComponents/SudokuGame";
import SpaceInvadersGame from "./Components/GamesComponents/SpaceInvadersGame";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

