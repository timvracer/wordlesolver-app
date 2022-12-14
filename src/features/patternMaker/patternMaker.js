import React, { useState, useEffect } from 'react';
import { PatternItem } from '../patternItem/patternItem';

import './patternMaker.css';

export function PatternMaker(props) {

    const { value, onChange } = props;
    const [pattern, setPattern] = useState(value || '01210');
    const [patternArray, setPatternArray] = useState(pattern.split(''));

    useEffect(() => {
        setPatternArray(pattern.split(''));
    }, [pattern]);


    var itemClick = (index, value) => {
        patternArray[index] = String((Number(value) + 1) % 3);
        const newPattern = patternArray.reduce((item, val) => val = item + val, '');
        setPattern(newPattern);
        if (onChange) onChange(newPattern);
    };

    return (
        <div className="patternMaker" >
            { patternArray.map((item, index) => (
              <div key={index} className={"patternItems"}>
                  <PatternItem
                      value={item}
                      index={index}
                      onClick={itemClick}
                  />
              </div>
            ))}
        </div>
    );
}

