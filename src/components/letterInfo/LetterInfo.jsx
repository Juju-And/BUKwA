import React from "react";
import styles from "./LetterInfo.scss";
import {Link} from "react-router-dom"
import {getRandomNewLetter} from "../session";
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
                if (Object.letterName === this.props.letter) {
                    return <div>{Object.pronunciation}</div>
                }
            }
        )
        let translation = letters.map((Object) => {
                if (Object.letterName === this.props.letter) {
                    return <div>{Object.translation}</div>
                }
            }
        )
        let picture = letters.map((Object) => {
                if (Object.letterName === this.props.letter) {
                    return <div className={styles.pictureContainer}><img src={Object.picture} className={styles.picture}/>
                    </div>
                }
            }
        )
        // console.log(listOfData);
        return <div className={styles.letterDataContainer}>
            <div className={styles.letterData}>
                <p className={styles.letterName}>Litera {this.props.letter}</p>
                <span>Słowo:</span> {description}
                <span>Wymowa:</span> {pronunciation}
                <span>Tłumaczenie:</span> {translation}
            </div>
            {picture}
        </div>
    }
}

const BottomNavLetInf = () => {
    return <div className={styles.buttonsWrapper}>
        <Link to={"/summary"} className={styles.summaryButton}>PODSUMOWANIE</Link>
        <Link to={"/sketchPad/" + getRandomNewLetter()} className={styles.continueButton}>KONTYNUUJ
            RYSOWANIE</Link>
    </div>
}


export default class LetterInfo extends React.Component {
    render() {
        return (<div className={styles.wrapperLetterInfo}>
            <h1>Dowiedz się więcej o literze, którą właśnie napisałeś!</h1>
            <Letter letter={this.props.match.params.letter}/>
            <BottomNavLetInf/>
        </div>)
    }
}
