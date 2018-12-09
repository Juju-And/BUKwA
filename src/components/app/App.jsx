import React from "react";
import styles from "./App.scss";
import Test from "../sketchPad/SketchPad.jsx";
import WelcomePage from "../welcomePage/WelcomePage.jsx";
import LetterInfo from "../letterInfo/LetterInfo.jsx";
import SketchPad from "../sketchPad/SketchPad.jsx";
import Summary from "../summary/Summary.jsx";
import {
    HashRouter,
    Route } from 'react-router-dom';


export default class App extends React.Component {
    render() {
        return <HashRouter>
            <div>
                <Route exact path='/' component={WelcomePage} />
                <Route path='/letterinfo/:letter' component={LetterInfo} />
                <Route path='/sketchPad/:letter' component={SketchPad} />
                <Route path='/summary' component={Summary} />
            </div>
        </HashRouter>;
    }
}