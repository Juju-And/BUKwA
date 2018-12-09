import React from "react";
// import styles from "./WelcomePage.scss";
import giraffe from "../../assets/giraffe.jpg";
import zaba from "../../assets/zaba.jpg";
import zuk from "../../assets/zuk.jpg";
import { Link } from "react-router-dom"
import getRandomLetter from "../getRandomLetter";


class Letter extends React.Component {
    render() {
        return <div>
            <p>Litera "Ż" - "Ж" { this.props.letter }</p>
            <img src={giraffe}/>
        </div>
    }
}

export default class LetterInfo extends React.Component {
    render() {
        return <div>
            <h1>Dowiedz się więcej o literze, którą właśnie napisałeś!</h1>
            <Letter letter={this.props.match.params.letter }/>
            <h2>Nie chcę już dalej rysować, podsumuj moją sesję.</h2>
            <Link to={ "/summary" }>PODSUMOWANIE</Link>
            <Link to={ "/sketchPad/" + getRandomLetter() }>PODSUMOWANIE</Link>
        </div>
    }
}
