import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import App from "./App";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="#" className="navbar-brand" >Classic Games Web page</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"> <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/Jbalda02">Github</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/Jbalda02">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/Jbalda02">Contact Info</a>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );

}

export default Header