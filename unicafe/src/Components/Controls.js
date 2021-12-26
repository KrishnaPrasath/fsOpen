import React from 'react'
import Button from "./Button";

const Controls = ({setFeedback}) => {

    const onClick = (_text) => {
        setFeedback( prev => {
            let _ = {good: 0, neutral: 0, bad: 0};
            if(prev){
                _ = {...prev};
            }
            _[_text] = _[_text] + 1;
            return _;
        });
    }

    return(
        <>
            <Button text={"good"} onClickHandler={onClick}/>
            <Button text={"neutral"} onClickHandler={onClick}/>
            <Button text={"bad"} onClickHandler={onClick}/>
        </>
    );
};

export default Controls;