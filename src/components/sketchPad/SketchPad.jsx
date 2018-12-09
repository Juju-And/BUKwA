import React from "react";
// import styles from "./App.scss";
import imageSrc from "../../assets/JJ_01.png";
import imageSrcOK from "../../assets/JJ-02ok-02.png";
import "./font/stylesheet.css";

import SketchPadVendor from "../../../node_modules/react-sketchpad/lib/SketchPad.js";

const rotate90deg = array2d => {
    const ret = [];
    const h = array2d.length;
    const w = array2d[0].length;
    for (var i = 0; i < w; i++) {
        ret[i] = [];
        for (var j = 0; j < h; j++) {
            ret[i][j] = array2d[j][i];
        }
    }
    return ret;
};

// window.colors = {};

const canvasToPixels = canvas => {
    const pixels = [];

    console.log("canvasToPixels", canvas.width, canvas.height);

    for (var x = 0; x < canvas.width; x++) {
        pixels[x] = [];
        for (var y = 0; y < canvas.height; y++) {

            const [r, g, b, a] = canvas.getContext("2d").getImageData(x, y, 1, 1).data;

            const colorSum = r + g + b;
            const isWhite = colorSum > 240 * 3 || a < 30;

            // window.colors[[r,g,b,a].join(" ")] = true;

            pixels[x][y] = isWhite ? 0 : 1;
        }
    }
    return pixels;
};

export default class Test extends React.Component {
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
        this.getOKPixels();
    }


    // componentDidMount() {
    //     this.interval = setInterval(() => this.showPixels(), 500);
    // }
    //
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    showPixels() {
        this.setState({ pixels: canvasToPixels(this.canvas.ctx.canvas) });
        this.getOKPixels();
        this.updatePercentage();
    }

    updatePercentage() {
        this.setState(prevState => {
           const { pixels, borderPixels, okPixels } = prevState;

           console.log({ pixels, borderPixels, okPixels })

           const w = pixels.length;
           const h = pixels[0].length;

           let numberOfPixels = w * h;
           let sum = 0;

           for (let x = 0; x < w; x ++) {
               for (let y = 0; y < h; y ++) {
                   const userPixel = pixels[x][y];
                   const okPixel = okPixels[x] ? okPixels[x][y] : 0;
                   const borderPixel = borderPixels[x][y];

                   // console.log({
                   //     userPixel,
                   //     okPixel,
                   //     borderPixel
                   // });

                   if (borderPixel) {
                       numberOfPixels --;
                   } else if (okPixel===0 && userPixel ===0) {
                       numberOfPixels --;
                   } else {
                       sum += okPixel === userPixel;
                   }
               }
           }

           console.log({
               numberOfPixels,
               sum
           });

           return {
               percentage: sum / numberOfPixels * 100
           }

        });
    }

    pixelsToString(pixels) {
        return rotate90deg(pixels).map(row => row.join("")).join("\n");
    }

    drawLetterFillOnCanvas (canvas, letter){
        var ctx = canvas.getContext("2d");
        ctx.font = "300px bad_scriptregular";
        ctx.fillText(letter, canvas.width/4, canvas.height/2);
    }
    drawLetterOutlineOnCanvas (canvas, letter){
        var ctx = canvas.getContext("2d");
        ctx.font = "300px bad_scriptregular";
        ctx.strokeText(letter, canvas.width/4, canvas.height/2);
    }


    getOKPixels() {
        var canvas = document.createElement("canvas");

        canvas.width = this.canvas.canvas.width;
        canvas.height = this.canvas.canvas.height;

        this.drawLetterFillOnCanvas(canvas, "ж");

        this.setState({
            okPixels: canvasToPixels(canvas)
        })
    }

    renderPixels() {
        return (
            <div>
                { this.state.percentage } %
                <pre style={ { fontSize: "4px" } }>
                    {
                        this.pixelsToString(this.state.borderPixels)
                    }
                </pre>

                <pre style={ { fontSize: "4px" } }>
                    {
                        this.pixelsToString(this.state.pixels)
                    }
                </pre>

                <pre style={ { fontSize: "4px" } }>
                    {
                        this.pixelsToString(this.state.okPixels)
                    }
                </pre>
            </div>
        );
    }

    // drawImageOnCanvas(canvas, imageSrc, onDone) {
    //     const context = canvas.getContext('2d');
    //
    //     const image = new Image();
    //     image.onload = () => {
    //         canvas.width = image.width;
    //         canvas.height = image.height;
    //
    //         context.drawImage(image, 0, 0);
    //
    //         onDone && onDone();
    //     };
    //     image.src = imageSrc;
    // }

    onCanvasCreated = canvas => {
        this.canvas = canvas;

            this.drawLetterOutlineOnCanvas(canvas.canvas, "ж");

            this.setState({
                borderPixels: canvasToPixels(this.canvas.canvas)
            });


        // this.drawImageOnCanvas(this.canvas.canvas, imageSrc, () => this.setState({
        //     borderPixels: canvasToPixels(this.canvas.canvas)
        // }))
    };


    render() {
        return <div>
            <SketchPadVendor
                ref={ this.onCanvasCreated }
                height={400} width={400} items={[]}
                style={{borderColor:"red"}}
                size = {15}
            />
            <button onClick={() => this.showPixels()}>show pixels</button>
            {this.renderPixels()}

        </div>;
    }
}