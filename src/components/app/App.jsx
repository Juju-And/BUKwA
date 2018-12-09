import React from "react";
import styles from "./App.scss";
import Test from "../sketchPad/SketchPad.jsx";
import WelcomePage from "../welcomePage/WelcomePage.jsx";

export default class App extends React.Component {
    render() {
        return <WelcomePage/>
    }
}