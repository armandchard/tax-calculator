import React from "react";
import ReactDOM from "react-dom"
import Header from "./components/header"
import 'bootstrap/dist/css/bootstrap.css';
import '../scss/style.scss'
import Body from "./components/Body";

class App extends React.Component {
    render() {
        return <div>
            <Header title="Système de calcul d'impot 2020" />
            <div className="container">
                <Body />
            </div>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById("app"))