import React from 'react'

const Button = ({onClickHandler, text}) => {
    
    return(
        <>
            <button onClick={() => onClickHandler(text)}>{text}</button>
        </>
    );
};

export default Button;