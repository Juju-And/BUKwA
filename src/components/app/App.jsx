import React from "react";
import styles from "./App.scss";
import imageSrc from "../../assets/cookie.jpeg";

export default class App extends React.Component {
    render() {
        return (<div className={styles.app}> To jest Appkaaaaaaaaaaaaaa
        <img src={imageSrc} alt="Me loves cookies!" />
        </div>);
    }
}