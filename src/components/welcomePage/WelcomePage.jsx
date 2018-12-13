import React from "react";
import styles from "./WelcomePage.scss";
import {Link} from "react-router-dom";
import getRandomLetter from "../getRandomLetter";
import PlayButton from "./PlayButton.jsx";


export default class WelcomePage extends React.Component {

    render() {
        return <div className={styles.mainContainer}>
            <h1>Witaj w BUKwA!</h1>
            <p>Nazwa aplikacji wzięła się od rosyjskiego <i>bukwa</i> (ros. буква), czyli po prostu litera.</p>
            <p>Kliknij w poniższy przycisk, by rozpocząć naukę rosyjskiego alfabetu!</p>
            <Link className={styles.startButton}
                  // role="button"
                  to={`/sketchPad/${getRandomLetter()}`}>СТАРТ!</Link>
            {/*<PlayButton/>*/}
        </div>
    }
}
