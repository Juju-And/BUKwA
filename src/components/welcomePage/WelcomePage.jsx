import React from "react";

export default class WelcomePage extends React.Component {
    render() {
        return <div>
            <h1>Witaj w BUKwA!</h1>
            <p>Nazwa aplikacji wzięła się od rosyjskiego <i>bukwa</i> (ros. буква), czyli po prostu litera.</p>
            <p>Kliknij w poniższy przycisk, by rozpocząć naukę rosyjskiego alfabetu!</p>
            <button id="startButton">START</button>
        </div>
    }
}