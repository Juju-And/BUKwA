import React from "react";
import styles from "./WelcomePage.scss";
import {Link} from "react-router-dom";
import {setNextRandomLetter, reset as resetSession, getRandomNewLetter} from "../session.js";


export default class WelcomePage extends React.Component {

    render() {
        resetSession();
        setNextRandomLetter();
        return <div className={styles.mainContainer}>
            <h1>Witaj w BUKwA!</h1>
            <p>Nazwa aplikacji wzięła się od rosyjskiego <i>bukwa</i> (ros. буква), czyli po prostu litera.</p>
            <p>Kliknij w poniższy przycisk, by rozpocząć naukę rosyjskiego alfabetu!</p>
            <Link className={styles.startButton}
                  to={`/sketchPad/${getRandomNewLetter()}`}>START!</Link>
        </div>
    }
}
