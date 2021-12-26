import React from 'react';
import {Part} from "./Common";

const Content = ({course}) => {

    const {parts} = course;

    return(
        <>
            {
                parts.map(({name, exercises}) => {
                    return (
                        <Part part={name} exercises={exercises}/>
                    )
                })
            }
        </>
    )
}

export default Content;
