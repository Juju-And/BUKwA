import React from "react";
// import styles from "./WelcomePage.scss";
import giraffe from "../../assets/giraffe.jpg";
import {Link} from "react-router-dom"
import getRandomLetter from "../getRandomLetter";
import letters from './lettersDescription.js';

console.log(letters);

// console.log(letter);
class Letter extends React.Component {

    render() {

        let listOfData = letters.map(

            function findLettersFeatures() {
                // sprawdź, czy litera jest taka sama jak wylosowana
               if( {findLettersFeatures.alfabethLetter} === {this.props.letter}){
                   //jeżeli jest, wyciągnij z obiektu jej opis
                    return <div>{findLettersFeatures.description}</div>
                }
            }

            // myLetter => <div>{myLetter.alfabethLetter} {myLetter.description}</div>
        );
        console.log(listOfData);
        return <div>
            <p>Litera {this.props.letter}</p>
            <img src={giraffe}/>
            <div>Słowo: {this.listOfData}</div>

        </div>
    }
}

function ChatMessage(props){
    return <li>{props.textWIADOMOSCI}</li>
}

function ChatMessages(props){
    const doWYSWIETLENIA = props.messages.map( message => <ChatMessage key={message.text} textWIADOMOSCI={message.text}/>)
    return   <div>
        <ul>
            {doWYSWIETLENIA}
        </ul>
    </div>
}

export default class LetterInfo extends React.Component {
    render() {
        return <div>
            <h1>Dowiedz się więcej o literze, którą właśnie napisałeś!</h1>
            <Letter letter={this.props.match.params.letter}/>
            <h2>Nie chcę już dalej rysować, podsumuj moją sesję.</h2>
            <Link to={"/summary"}>PODSUMOWANIE</Link>
            <Link to={"/sketchPad/" + getRandomLetter()}>KONTYNUUJ Z NOWYMI LITERAMI</Link>
        </div>
    }
}
