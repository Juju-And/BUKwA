import React from "react";
// import styles from "./WelcomePage.scss";
import giraffe from "../../assets/giraffe.jpg";
import zaba from "../../assets/zaba.jpg";
import zuk from "../../assets/zuk.jpg";


class LetterZh extends React.Component {
    render() {
        return <div>
            <p>Litera "Ż" - "Ж"</p>
            <img src={giraffe}/>
        </div>
    }
}

export default class LetterInfo extends React.Component {
    render() {
        return <div>
            <h1>Dowiedz się więcej o literze, którą właśnie napisałeś!</h1>
            <LetterZh/>
            <h2>Nie chcę już dalej rysować, podsumuj moją sesję.</h2>
            <Link className={ styles.button } to={ "/summary" }>PODSUMOWANIE</Link>
        </div>
    }
}
