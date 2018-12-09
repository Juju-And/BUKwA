import React from "react";
import "./font/stylesheet.css";
import styles from "./SketchPad.scss";
import {Link} from "react-router-dom";

import SketchPadVendor from "../../../node_modules/react-sketchpad/lib/SketchPad.js";

const canvasToPixels = canvas => {
    const pixels = [];

    for (var x = 0; x < canvas.width; x++) {
        pixels[x] = [];
        for (var y = 0; y < canvas.height; y++) {

            const [r, g, b, a] = canvas.getContext("2d").getImageData(x, y, 1, 1).data;

            const colorSum = r + g + b;
            const isWhite = colorSum > 240 * 3 || a < 30;

            pixels[x][y] = isWhite ? 0 : 1;
        }
    }
    return pixels;
};

const Legend = ({ score, updateScore, letter }) => {
    return <div className={styles.wrapperDescriptionSketch}>
        <p>Do dyspozycji masz mazak. Wypełnij literę wewnątrz konturów, a następnie sprawdź swój rezultat
            klikając
            w przycisk.</p>
        <ButtonSketch onClick={ updateScore }/>
        <div>Wynik { score }</div>
        {
            score > 60 && <Link className={styles.buttonToLetterInfo} to={"/letterInfo/" + letter }>Pokaż info o literze.</Link>
        }
    </div>
}

const ButtonSketch = ({ onClick }) => {
    return <button
            onClick={ onClick }
            className={styles.wrapperDescriptionSketch}>
            Pokaż mój rezultat
        </button>
}

export default class SketchPad extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            percentage: 0,
            pixels: [[]],
            borderPixels: [[]],
            okPixels: [[]]
        };
    }

    componentDidMount() {
        this.updateScore();
    }

    updateScore = () => {
        this.setState({
            pixels: canvasToPixels(this.canvas.canvas)
        }, () => this.updatePercentage());
    }

    updatePercentage() {
        this.setState(prevState => {
            const {pixels, borderPixels, okPixels} = prevState;

            const w = pixels.length;
            const h = pixels[0].length;

            let numberOfPixels = w * h;
            let sum = 0;

            for (let x = 0; x < w; x++) {
                for (let y = 0; y < h; y++) {
                    const userPixel = pixels[x][y];
                    const okPixel = okPixels[x] ? okPixels[x][y] : 0;
                    const borderPixel = borderPixels[x][y];

                    if (borderPixel) {
                        numberOfPixels--;
                    } else if (okPixel === 0 && userPixel === 0) {
                        numberOfPixels--;
                    } else {
                        sum += okPixel === userPixel;
                    }
                }
            }

            return {
                percentage: sum / numberOfPixels * 100
            }

        });
    }

    drawLetterFillOnCanvas(canvas, letter) {
        var ctx = canvas.getContext("2d");
        ctx.font = "500px bad_scriptregular";
        ctx.fillText(letter, canvas.width / 4, canvas.height / 2);
    }

    drawLetterOutlineOnCanvas(canvas, letter) {
        var ctx = canvas.getContext("2d");
        ctx.font = "500px bad_scriptregular";
        ctx.strokeText(letter, canvas.width / 4, canvas.height / 2);
    }

    getOKPixels() {
        const canvas = document.createElement("canvas");

        canvas.width = this.canvas.canvas.width;
        canvas.height = this.canvas.canvas.height;

        this.drawLetterFillOnCanvas(canvas, this.getLetter());

        return canvasToPixels(canvas);
    }

    onCanvasCreated = canvas => {
        if (!canvas) {
            return;
        }
        this.canvas = canvas;

        this.drawLetterOutlineOnCanvas(canvas.canvas, this.getLetter());

        this.setState({
            borderPixels: canvasToPixels(this.canvas.canvas),
            okPixels: this.getOKPixels()
        });
    };

    getLetter() {


        return this.props.match.params.letter;
    }

    render() {
        return <div className={styles.sketchContainer}>
            <Legend
                score={ this.state.percentage }
                updateScore={ this.updateScore }
                letter={ this.getLetter() }
            />
            <div className={styles.wrapperSketchPad}>
                <SketchPadVendor
                    ref={this.onCanvasCreated}
                    height={600} width={600} items={[]}
                    size={15}
                />
            </div>
        </div>
    }
}