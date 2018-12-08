import React from "react";
// import styles from "./App.scss";
import imageSrc from "../../assets/JJ_01.png";

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
}

export default class Test extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            pixels: [[]]
        };
    }

    componentDidMount() {
        const context = this.canvas.getContext('2d');

        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
            context.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
        }
    }



    // componentDidMount() {
    //     this.interval = setInterval(() => this.showPixels(), 500);
    // }
    //
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    showPixels() {
        const pixels = [];
        for (var x = 0; x < this.canvas.ctx.canvas.width; x++) {
            pixels[x] = [];
            for (var y = 0; y < this.canvas.ctx.canvas.height; y++) {

                const [r, g, b, a] = this.canvas.ctx.getImageData(x, y, 1, 1).data;
                pixels[x][y] = r + g + b + a > 0 ? 1 : 0
            }
        }
        this.setState({pixels});
    }

    pixelsToString() {
        return rotate90deg(this.state.pixels).map(row => row.join("")).join("\n");
    }

    renderPixels() {
        return (
            <pre>
                {
                    this.pixelsToString()
                }
            </pre>
        );
    }


    render() {
        return <div>
            <SketchPadVendor
                ref={el => this.canvas = el}
                height={75} width={75} items={[]}
            />

            <button onClick={() => this.showPixels()}>show pixels</button>
            {this.renderPixels()}

        </div>;
    }
}