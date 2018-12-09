import React from "react";
import styles from "./WelcomePage.scss";
import { Link } from "react-router-dom";
import getRandomLetter from "../getRandomLetter";

export default class WelcomePage extends React.Component {

    render() {
        return <div>
            <h1>Witaj w BUKwA!</h1>
            <p>Nazwa aplikacji wzięła się od rosyjskiego <i>bukwa</i> (ros. буква), czyli po prostu litera.</p>
            <p>Kliknij w poniższy przycisk, by rozpocząć naukę rosyjskiego alfabetu!</p>
            <Link className={ styles.button } to={ `/sketchPad/${getRandomLetter()}` }>START</Link>
    </div>
    }
}
