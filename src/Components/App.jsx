// Libraries
import React from "react";
// Components
import Header from "./Header";
import Gallery from "./Gallery";
//Routing
import {Route} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <Route path='/' element={<Gallery/>}/>
        </div>
    )
        ;
}

export default App