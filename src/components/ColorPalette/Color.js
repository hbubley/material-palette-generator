import React from "react";

const Color = ({ background }) => {
    return (
        <div
            className="color"
            style={{
                background: background,
            }}
        >
            <span>MORE</span>
        </div>
    );
};

export default Color;
