import React from "react";
import Color from "./Color";
import './ColorPalette.css'
const Palette = ({ palette }) => {
    const colorArray = palette.colors.map((color) => (
        <Color background={color.color} />
    ));
    return (
        <div className="palette">
            <h1>palette</h1>
            <div className="palette-colors">{colorArray}</div>
        </div>
    );
};

export default Palette;
