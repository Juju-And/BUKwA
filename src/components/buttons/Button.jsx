import React from "react";
import styles from "./button.scss";
import {Link} from "react-router-dom";

const ButtonLink = ({ to }) => {
    return <Link className={styles.startButton}
                 to={ to }>START!</Link>
}