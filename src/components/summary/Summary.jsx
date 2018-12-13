import React from "react";
import styles from "./Summary.scss";
import {Link} from "react-router-dom";

export default class WelcomePage extends React.Component {

    render() {
        return <div className={styles.wrapperSummaryContainer}>
            <h1>Poniżej możesz zobaczyć podsumowanie swojej ostatniej lekcji:</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eius enim error impedit maiores
                minima, minus nulla provident, quaerat quidem quod sequi suscipit tempore veritatis voluptas? Harum in
                officiis sed!Ab adipisci aperiam aspernatur cumque debitis distinctio doloribus dolorum eveniet in
                incidunt modi molestiae mollitia natus nihil numquam officia optio possimus quam qui temporibus, velit
                veniam vitae voluptatum! Maxime, sint!A accusantium at dolorem enim eveniet modi rem, similique ullam vero vitae?
                Eaque est et id obcaecati quos voluptate! Eaque, nesciunt, sapiente! Beatae commodi, dicta eos facilis impedit nam unde?
                Animi atque cupiditate dolore et eum facilis iure labore libero magnam maxime praesentium qui quidem, quod tempora voluptate.
            </p>            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eius enim error impedit maiores
                minima, minus nulla provident, quaerat quidem quod sequi suscipit tempore veritatis voluptas? Harum in
                officiis sed!Ab adipisci aperiam aspernatur cumque debitis distinctio doloribus dolorum eveniet in
                incidunt modi molestiae mollitia natus nihil numquam officia optio possimus quam qui temporibus, velit
                veniam vitae voluptatum! Maxime, sint!A accusantium at dolorem enim eveniet modi rem, similique ullam vero vitae?
                Eaque est et id obcaecati quos voluptate! Eaque, nesciunt, sapiente! Beatae commodi, dicta eos facilis impedit nam unde?
                Animi atque cupiditate dolore et eum facilis iure labore libero magnam maxime praesentium qui quidem, quod tempora voluptate.
            </p>            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eius enim error impedit maiores
                minima, minus nulla provident, quaerat quidem quod sequi suscipit tempore veritatis voluptas? Harum in
                officiis sed!Ab adipisci aperiam aspernatur cumque debitis distinctio doloribus dolorum eveniet in
                incidunt modi molestiae mollitia natus nihil numquam officia optio possimus quam qui temporibus, velit
                veniam vitae voluptatum! Maxime, sint!A accusantium at dolorem enim eveniet modi rem, similique ullam vero vitae?
                Eaque est et id obcaecati quos voluptate! Eaque, nesciunt, sapiente! Beatae commodi, dicta eos facilis impedit nam unde?
                Animi atque cupiditate dolore et eum facilis iure labore libero magnam maxime praesentium qui quidem, quod tempora voluptate.
            </p>            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eius enim error impedit maiores
                minima, minus nulla provident, quaerat quidem quod sequi suscipit tempore veritatis voluptas? Harum in
                officiis sed!Ab adipisci aperiam aspernatur cumque debitis distinctio doloribus dolorum eveniet in
                incidunt modi molestiae mollitia natus nihil numquam officia optio possimus quam qui temporibus, velit
                veniam vitae voluptatum! Maxime, sint!A accusantium at dolorem enim eveniet modi rem, similique ullam vero vitae?
                Eaque est et id obcaecati quos voluptate! Eaque, nesciunt, sapiente! Beatae commodi, dicta eos facilis impedit nam unde?
                Animi atque cupiditate dolore et eum facilis iure labore libero magnam maxime praesentium qui quidem, quod tempora voluptate.
            </p>
            <Link to={"/"} className={styles.toStartButton}>DO POCZĄTKU</Link>
        </div>


    }
}

