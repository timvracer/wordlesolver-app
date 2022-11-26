import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

import './patternListMaker.css';
import {PatternMaker} from "../patternMaker/patternMaker";

export function PatternListMaker() {

    const [currentPattern, setCurrentPattern] = useState('00000');
    const [patternList, setPatternList] = useState([]);

    const addPattern = () => {
        console.log("add the pattern ", currentPattern);
        const index = patternList.findIndex((x) => x === currentPattern);
        if (index < 0) {
            const newVal = patternList.concat([currentPattern]);
            setPatternList(newVal);
            console.log("current list is ", newVal);
        }
    };
    const deletePattern = () => {
        console.log("delete the pattern ", currentPattern);
        const index = patternList.findIndex((x) => x === currentPattern);
        if (index >= 0) patternList.splice(index, 1);
        console.log("current list is ", index, patternList);
        setPatternList(patternList);
    };

    return (
        <div className="patternListMaker" >
            <p>
                Enter the pattern and click "add" to add to the list
            </p>
            <div className="patternContainer">
                <div className="testPatternEdit">
                    <PatternMaker
                        value={'00000'}
                        onChange={setCurrentPattern}
                    />
                </div>
                <Button
                    variant="contained"
                    aria-label="Add the pattern"
                    onClick={addPattern}
                >
                    Add
                </Button>
                <Button
                    variant="contained"
                    sx={{ marginLeft: '5px'}}
                    aria-label="Delete the pattern"
                    onClick={deletePattern}
                >
                    Remove
                </Button>

            </div>
        </div>
    );
}

