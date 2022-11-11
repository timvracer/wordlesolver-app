import React, { useState, useEffect } from 'react';

import './patternItem.css';

export function PatternItem(props) {

    const { value, onClick, index } = props;
    const [patternCode, setPatternCode] = useState(value);  // valid values are x, y, and #

    var color;
    switch (value) {
        case '0':
            color = '#3a3a3c';
            break;
        case '1':
            color = '#538d4e';
            break;
        case '2':
            color = '#b59f3b';
            break;
        default:
            color = '#000000';
            break;
    }

    return (
        <div
            style={{ backgroundColor: color }}
            className={"patternBlock"}
            onClick={() => onClick(index, value)}
        >
        </div>
    );
}
