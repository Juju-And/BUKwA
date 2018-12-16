import React from "react";
import "./font/stylesheet.css";
import styles from "./SketchPad.scss";
import {Link} from "react-router-dom";
import {getDescription} from '../letterInfo/lettersDescription.js';
import {setNextRandomLetter, getRandomNewLetter, save} from '../session.js';
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

const Legend = ({score, updateScore, letter}) => {
    return <div className={styles.wrapperDescriptionSketch}>
        <p>Do dyspozycji masz mazak. Wypełnij literę wewnątrz konturów, następnie sprawdź swój rezultat.
            Jeżeli osiągniesz dobry wynik, pojawi się nowy przycisk i przejdziesz do strony o literze.
        </p>
        <ButtonSketch onClick={updateScore}/>
        <div className={styles.result}>Twój wynik to: {score}%</div>
        {
            score > 60 &&
            <Link className={styles.buttonToLetterInfo} to={"/letterInfo/" + letter}>POKAŻ INFO</Link>
        }
    </div>
}

const ButtonSketch = ({onClick}) => {
    return <button
        onClick={onClick}
        className={styles.wrapperDescriptionSketch}>
        POKAŻ REZULTAT
    </button>
}

const BottomNav = ({nextLetter}) => {
    return <div className={styles.wrapperExtraButtons}>
        <Link to={"/summary"} className={styles.skipAllButton}>PODSUMOWANIE</Link>
        {nextLetter && <Link to={`/sketchPad/${nextLetter}`} className={styles.skipButton}>POMIŃ LITERĘ</Link>}
    </div>
}

export default class SketchPad extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            percentage: 0,
            pixels: [[]],
            borderPixels: [[]],
            okPixels: [[]],
            nextLetter: null
        };
    }

    componentDidMount() {
        this.updateScore();
        setNextRandomLetter();
        this.setState({
            nextLetter: getRandomNewLetter()
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.letter !== this.props.match.params.letter) {
            const nextLetter = getRandomNewLetter();
            console.log("!!!", {nextLetter});

            setNextRandomLetter();
            this.setState({
                nextLetter: getRandomNewLetter(),
                percentage: 0
            });
            return this.drawLetter()
        }
        if (this.canvas) {
            save(this.props.match.params.letter, this.state.percentage, this.canvas.canvas.toDataURL());
        }
    }

    updateScore = () => {
        this.setState({
            pixels: canvasToPixels(this.canvas.canvas)
        }, () => this.updatePercentage());
    };

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
                percentage: Math.round(sum / numberOfPixels * 100)
            }

        });
    }

    drawLetterFillOnCanvas(canvas, letter) {
        const yOffset = getDescription(letter) ? getDescription(letter).yOffset || 0 : 0;
        var ctx = canvas.getContext("2d");
        ctx.font = "500px bad_scriptregular";
        ctx.fillText(letter, canvas.width / 3, (canvas.height / 1.1) + yOffset);
    }

    drawLetterOutlineOnCanvas(canvas, letter) {

        console.log({letter}, getDescription(letter));

        const yOffset = getDescription(letter) ? getDescription(letter).yOffset || 0 : 0;
        var ctx = canvas.getContext("2d");
        ctx.font = "500px bad_scriptregular";
        ctx.strokeText(letter, canvas.width / 3, (canvas.height / 1.1) + yOffset);
        console.log(yOffset);
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
        this.drawLetter();
    };

    drawLetter = () => {
        if (!this.canvas) {
            return;
        }
        this.canvas.canvas.getContext("2d").clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
        this.drawLetterOutlineOnCanvas(this.canvas.canvas, this.getLetter());

        this.setState({
            borderPixels: canvasToPixels(this.canvas.canvas),
            okPixels: this.getOKPixels()
        });
    };

    getLetter() {
        return this.props.match.params.letter;
    }


    render() {
        return <div>
            <div className={styles.sketchContainer}>
                <Legend
                    score={this.state.percentage}
                    updateScore={this.updateScore}
                    letter={this.getLetter()}
                />
                <div className={styles.wrapperSketchPad}>
                    <SketchPadVendor
                        ref={this.onCanvasCreated}
                        height={700} width={650} items={[]}
                        size={18}

                    />
                </div>
            </div>
            <BottomNav nextLetter={this.state.nextLetter}/>
        </div>
    }
}