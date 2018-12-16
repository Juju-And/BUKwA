import React from "react";
import styles from "./Summary.scss";
import {Link} from "react-router-dom";
import {getResults} from '../session.js';

const Result = ({result}) => {
    return <div >
        <div className={styles.accuracy}>Zgodność ze wzorem: {result.percentage} %</div>
        <img className={styles.resultImage} src={result.imgData}/>
    </div>;
};

const Results = ({results}) => {
    return <div className={styles.wrapperResult}>
        {Object.values(results).map(result => <Result key={`result_for_${result.letter}`} result={result}/>)}
    </div>
};

export default class WelcomePage extends React.Component {

    render() {
        return <div className={styles.wrapperSummaryContainer}>
            <h1>Poniżej możesz zobaczyć podsumowanie swojej ostatniej lekcji:</h1>
            <Results results={getResults()}/>
            <Link to={"/"} className={styles.toStartButton}>DO POCZĄTKU</Link>
        </div>


    }
}

