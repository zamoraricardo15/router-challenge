import React from 'react';

export default function Grades(props){

    return (<div>
                {props.grades.map( (grade, index) => {
                    return (<h3> Grade {index + 1} : {grade} </h3>)
                })}
            </div>);
}