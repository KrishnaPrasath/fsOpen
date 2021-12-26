import React from 'react';

const Total = ({course}) => {

    const {parts} = course;

    let total = 0;
    parts.forEach((part) => {
        total += part.exercises
    });
    return <p>Number of exercises {total}</p>
}

export default Total;
