import React from "react";
import styles from "./LetterInfo.scss";
import giraffe from "../../assets/giraffe.jpg";
import {Link} from "react-router-dom"
import getRandomLetter from "../getRandomLetter";
import letters from './lettersDescription.js';

console.log(letters);

// console.log(letter);
class Letter extends React.Component {

    render() {
        let description = letters.map((Object) => {
                // sprawdź, czy litera jest taka sama jak wylosowana
                if (Object.letterName === this.props.letter) {
                    //jeżeli jest, wyciągnij z obiektu jej opis
                    return <div>{Object.description}</div>
                }
            }
        )
        let pronunciation = letters.map((Object) => {
                // sprawdź, czy litera jest taka sama jak wylosowana
                if (Object.letterName === this.props.letter) {
                    //jeżeli jest, wyciągnij z obiektu jej opis
                    return <div>{Object.pronunciation}</div>
                }
            }
        )
        let translation = letters.map((Object) => {
                // sprawdź, czy litera jest taka sama jak wylosowana
                if (Object.letterName === this.props.letter) {
                    //jeżeli jest, wyciągnij z obiektu jej opis
                    return <div>{Object.translation}</div>
                }
            }
        )
        let picture = letters.map((Object) => {
                // sprawdź, czy litera jest taka sama jak wylosowana
                if (Object.letterName === this.props.letter) {
                    //jeżeli jest, wyciągnij z obiektu jej opis
                    return <div><img src={giraffe} className={styles.picture}/></div>
                }
            }
        )
        // console.log(listOfData);
        return <div>
            <p>Litera {this.props.letter}</p>
            <div>{picture}</div>
            <div>Słowo: {description}</div>
            <div>Tłumaczenie: {translation}</div>
            <div>Wymowa: {pronunciation}</div>


        </div>
    }
}


export default class LetterInfo extends React.Component {
    render() {
        return (<div className={styles.wrapperLetterInfo}>
            <h1>Dowiedz się więcej o literze, którą właśnie napisałeś!</h1>
            <Letter letter={this.props.match.params.letter}/>
            {/*<h2>Nie chcę już dalej rysować, podsumuj moją sesję.</h2>*/}
            <div className={styles.buttonsWrapper}>
                <Link to={"/summary"} className={styles.summaryButton}>PODSUMOWANIE</Link>
                <Link to={"/sketchPad/" + getRandomLetter()} className={styles.continueButton}>KONTYNUUJ
                    RYSOWANIE</Link>
            </div>
        </div>)
    }
}
